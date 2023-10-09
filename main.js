import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { Character } from './src/character';
import * as CANNON from 'cannon'

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

let controls;

let started = false;
//Loader Manager
const manager = new THREE.LoadingManager();

//loaders
const fbxLoader = new FBXLoader(manager);
const textureLoader = new THREE.TextureLoader(manager);
const rgbeLoader = new RGBELoader(manager); //Loader used to load our hdr


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
renderer.shadowMap.enabled = true;

// Lights
const ambientLigth = new THREE.AmbientLight('white', 0.5)
scene.add(ambientLigth)

const directionalLight = new THREE.DirectionalLight('white', 1);
directionalLight.position.set(0, 4, 0);
scene.add(directionalLight);

const light = new THREE.PointLight('white', 100, 100);
light.castShadow = true;
light.position.set(3, 10, 3);
scene.add(light);

// Camera initial values
camera.position.z = 10;
camera.position.y = 10;
camera.rotateX(toRad(-45))

// Cannon settings
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // Gravity in the negative Z direction
const groundBody = new CANNON.Body({
    mass: 0,
    material: new CANNON.Material()

});
const groundShape = new CANNON.Plane();
groundBody.addShape(groundShape);
groundBody.material.friction = 0;
console.log(groundBody.material);
const quat = new CANNON.Quaternion();
quat.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
groundBody.quaternion = quat;
world.addBody(groundBody);





const character = new Character(scene, world);


//Load HDRI
rgbeLoader.load('other/sky.hdr', texture => {

    //Get ready our hdri
    const generator = new THREE.PMREMGenerator(renderer)
    const envMap = generator.fromEquirectangular(texture).texture;

    //scene.environment= envMap; // Let affect the lighting 
    scene.background = envMap
    texture.dispose()
    generator.dispose()
})


fbxLoader.load('models/environment.fbx',
    async (object) => {

        await textureLoader.load('textures/checker.jpg', (texture) => {

            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;

            const groundMaterial = new THREE.MeshStandardMaterial({ color: 'white', map: texture });

            object.children[0].material = groundMaterial;
            object.children[0].receiveShadow = true; // Enable shadow receiving
            object.children[0].castShadow = true; // Enable shadow receiving
            scene.add(object);
        })
        //scene.add(object)
    },
    (xhr) => {
    },
    (error) => {
        console.log(error)
    }
)



let lastTime;


function animate(time) {
    requestAnimationFrame(animate);

    if (started) {
        world.step(1 / 60);
        lastTime = time;
        character.update();
        controls.update();
        renderer.render(scene, camera);
    }

}

animate(0);

function toRad(deg) {
    return (deg * (Math.PI / 180))
}
function init() {
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true;
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
