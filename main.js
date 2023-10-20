import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { Character } from './src/character';
import * as CANNON from 'cannon-es'
import Stats from 'stats.js';
import CannonDebugger from 'cannon-es-debugger'
import { CreateEnvironmnet } from './src/environmnet';
import { updateCharacters } from './src/network';
import { degToRad } from 'three/src/math/MathUtils';
import { initCharacterSelector } from './src/character-selector';
import { connectToServer } from './src/network';
import { createLights } from './src/lights';
// Scene

initCharacterSelector();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 5;
camera.rotateX(degToRad(90));
const renderer = new THREE.WebGLRenderer();
let started = false;
//scene.fog = new THREE.Fog(0xa0a0a0, 10, 20);
//Loader Manager
const manager = new THREE.LoadingManager();

//loaders
const fbxLoader = new FBXLoader(manager);
const textureLoader = new THREE.TextureLoader(manager);
const rgbeLoader = new RGBELoader(manager); //Loader used to load our hdr

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// Lights

createLights(scene)

// Cannon settings
const world = new CANNON.World();
world.gravity = new CANNON.Vec3(0, -20, 0)
const noBounceMaterial = new CANNON.Material();
noBounceMaterial.restitution = 0;
noBounceMaterial.friction = 0;

// Set the contact material between two specific materials to have no bounce
const contactMaterial = new CANNON.ContactMaterial(noBounceMaterial, noBounceMaterial, {
    restitution: 0,
    friction: 0
});
world.defaultMaterial = noBounceMaterial;
// Add the contact material to the world
world.addContactMaterial(contactMaterial);
const cannonDebugger = new CannonDebugger(scene, world, {})
const groundBody = new CANNON.Body({
    mass: 0,
    collisionFilterGroup: 2,
    material: world.defaultMaterial
});
const groundShape = new CANNON.Plane();
groundBody.addShape(groundShape);
const quat = new CANNON.Quaternion();
quat.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
groundBody.quaternion = quat;
//world.addBody(groundBody);
let character = null;

//new Character(scene, world, camera, renderer, manager);
//Load HDRI
rgbeLoader.load('other/sky.hdr', texture => {

    //Get ready our hdri
    const generator = new THREE.PMREMGenerator(renderer)
    const envMap = generator.fromEquirectangular(texture).texture;

    scene.background = envMap
    texture.dispose()
    generator.dispose()
})

fbxLoader.load('models/environment.fbx',
    async (object) => {
        CreateEnvironmnet(object, textureLoader, scene, world)
    },
    (error) => {
        console.log(error)
    }
)


//stats
var stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
//document.body.appendChild(stats.dom);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // Use PCFSoftShadowMap for soft shadows

let lastTime;
function animate(time) {
    stats.begin();
    const deltaTime = (time - lastTime) / 1000;
    lastTime = time;
    if (started) {

        world.step(1 / 60);
        //cannonDebugger.update()
        character?.update(deltaTime);
        updateCharacters(deltaTime);
        renderer.shadowMap.needsUpdate = true;

        renderer.render(scene, camera);

    }
    stats.end();

    requestAnimationFrame(animate);

}

animate(0);

function init() {
    started = true;
    document.querySelector('.bg').style.display = 'none';
}
manager.onProgress = function (item, loaded, total) {
    const progress = (loaded / total) * 100;
    const bar = document.querySelector('.loading-percentage')
    bar.style.width = `${progress}%`;
    console.log("Loading progress: " + progress);
    if (progress === 100) {
        console.log("Ready: " + progress);
        init();
    }
};

document.querySelector('#btn-public-room').addEventListener('click', joinPublicRoom)
function joinPublicRoom() {
    setUp({
        scene,
        publicRoom: true,
        customRoom: ''
    })
}
document.querySelector('#btn-create-private-room').addEventListener('click', createPrivateRoom)

function createPrivateRoom() {
    setUp({
        scene,
        publicRoom: false,
        customRoom: ''
    })
}
document.querySelector('#btn-join-private-room').addEventListener('click', joinPrivateRoom)


function joinPrivateRoom() {
    const roomId = document.querySelector('#room-id').value
    document.querySelector('#room-id').classList.add('wrong')

    if (roomId.length <= 5 || !Number(roomId)) {

        return;
    }
    setUp({
        scene,
        publicRoom: false,
        customRoom: roomId
    })
    document.querySelector('#private').classList.add('hide')

}

document.querySelector('#btn-private-room').addEventListener('click', showJoinOptions)
document.querySelector('#cancel-join').addEventListener('click', hideJoinOptions)

function showJoinOptions() {
    document.querySelector('#private').classList.remove('hide')
    document.querySelector('#room-id').classList.remove('wrong')
}
function hideJoinOptions() {
    document.querySelector('#private').classList.add('hide')
}

function setUp(options) {
    document.querySelector('.main').classList.add('hide')
    character = new Character(scene, world, camera, renderer, manager);
    options.character = character;
    connectToServer(options);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    character?.resize();

}