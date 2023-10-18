import * as THREE from 'three';
import * as CANNON from 'cannon-es'
import { lookAt, loadModel, generateRandomRoomString } from './utility';
import { OrbitControls } from './OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { syncPlayerInfo } from './network';
import { getCharacter } from './character-selector';

export class Character {

    constructor(scene, world, camera, renderer, manager) {
        this.world = world;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.states = {
            Idle: 0,
            Walking: 1,
            Running: 2,
            Jumping: 3
        }
        this.state = this.states.Idle;
        this.manager = manager;
        this.ready = false;
        this.walkWeight = { value: 0 };
        this.runWeight = { value: 0 };
        this.idleWeight = { value: 0 };
        this.jumpWeight = { value: 0 };
        this.fadeAnimation(this.idleWeight, 1);
        this.init();
    }

    async init() {


        this.characterType = getCharacter();
        let character = await this.loadCharacter();
        this.loadAnimations(character)
        this.mesh = character;
        character.traverse(function (object) {
            if (object.isMesh) object.castShadow = true;
        });
        this.scene.add(this.mesh);
        this.maxSpeed = 3;
        this.force = new CANNON.Vec3(0, 0, 0)

        //Physics
        this.body = new CANNON.Body({
            mass: 1, // kg
            position: new CANNON.Vec3(0, 1, 0), // m
            shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.8, 0.2)),
            material: new CANNON.Material()

        });
        this.body.fixedRotation = true;
        this.body.updateMassProperties();
        this.body.material.friction = 0;
        this.world.addBody(this.body);
        this.keySet = new Set();
        document.addEventListener('keydown', this.handleInputDown.bind(this));
        document.addEventListener('keyup', this.handleInputUp.bind(this));

        const geometryDirection = new THREE.SphereGeometry(0)
        const materialDirection = new THREE.MeshStandardMaterial();
        materialDirection.color = new THREE.Color('transparent')

        this.meshDirection = new THREE.Mesh(geometryDirection, materialDirection);
        this.scene.add(this.meshDirection)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false;
        this.controls.target.copy(this.getPosition());
        this.camera.position.set(this.getPosition().x,
            this.getPosition().y - 0.2,
            this.getPosition().z - 2.5);

        this.controls.enableDamping = true;
        this.controls.enablePan = false;

        this.rightVector = new THREE.Vector3(0, 0, 0);

        this.canJump = true;
        this.groundCheck = new CANNON.Body({
            mass: 1, // kg
            position: new CANNON.Vec3(0, 0, 0), // m
            shape: new CANNON.Sphere(0.11),
            material: new CANNON.Material()

        });
        this.groundCheck.collisionResponse = 0;

        this.groundCheck.addEventListener("collide", function (e) {

            this.fadeAnimation(this.jumpWeight, 0)
            this.canJump = true;

        }.bind(this));

        this.world.addBody(this.groundCheck);
        this.hasReleasedSpaceKey = true;
        this.ready = true;
        this.cssRenderer = this.createCSSRenderer()
        this.nameLabel = this.createLabel();
        setInterval(() => { syncPlayerInfo(this) }, 100)



    }


    update(deltaTime) {
        if (this.ready) {
            const forwardVector = new THREE.Vector3();
            const cameraDirection = this.camera.getWorldDirection(forwardVector);
            const upVector = new THREE.Vector3(0, 1, 0);
            this.rightVector = new THREE.Vector3();
            this.rightVector.crossVectors(forwardVector, upVector);

            this.setForce(deltaTime);
            this.body.velocity = new CANNON.Vec3(forwardVector.x * this.force.z + this.rightVector.x * -this.force.x,
                this.body.velocity.y,
                cameraDirection.z * this.force.z + this.rightVector.z * -this.force.x)

            this.mesh.position.copy(new THREE.Vector3(this.body.position.x, this.body.position.y - 0.8, this.body.position.z));

            this.meshDirection.position.x = this.body.position.x + this.body.velocity.x
            this.meshDirection.position.z = this.body.position.z + this.body.velocity.z
            this.meshDirection.position.y = this.body.position.y

            this.controls.target.copy(new THREE.Vector3(this.getPosition().x, this.getPosition().y + 2, this.getPosition().z));
            this.controls.update();
            this.updateCamera();

            this.groundCheck.position.copy(new THREE.Vector3(this.getPosition().x, this.getPosition().y, this.getPosition().z))
            this.groundCheck.applyForce(new CANNON.Vec3(0, 20, 0))


            this.updateStateMachine();
            this.checkState();

            this.mixer.update(deltaTime);
            this.nameLabel.position.set(this.getPosition().x, this.getPosition().y + 2, this.getPosition().z)
            this.cssRenderer.render(this.scene, this.camera);
        }

    }

    handleInputDown(event) {
        if (document.pointerLockElement === null) {
            this.state = this.states.Idle;
            return;
        }
        this.keySet.add(event.key.toLowerCase())
        if (this.keySet.has(' ')) {
            this.jump();
            this.hasReleasedSpaceKey = false;
        }
    }

    handleInputUp(event) {


        this.keySet.delete(event.key.toLowerCase())
        if (event.key === ' ') {
            this.hasReleasedSpaceKey = true;
        }

    }

    updateStateMachine() {

        if (document.pointerLockElement === null) {
            this.state = this.states.Idle;
            return;
        }

        if (this.keySet.has('shift')) {

            if (this.body.velocity.x != 0) {
                this.state = this.states.Running;
            }
            else if (this.body.velocity.x <= 0) {
                this.state = this.states.Idle;

            }
        }
        else if (this.keySet.has('w') || this.keySet.has('s') || this.keySet.has('a') || this.keySet.has('d')) {
            this.state = this.states.Walking;

        }
        else {

            this.state = this.states.Idle;
        }

    }

    checkState() {
        switch (this.state) {
            case this.states.Idle:
                {
                    if (this.idleWeight.value === 0) {
                        this.fadeAnimation(this.idleWeight, 1)
                        this.fadeAnimation(this.walkWeight, 0)
                        this.fadeAnimation(this.runWeight, 0)
                    }
                    break;
                }

            case this.states.Walking:
                {

                    if (this.walkWeight.value === 0) {
                        this.fadeAnimation(this.idleWeight, 0)
                        this.fadeAnimation(this.walkWeight, 1)
                        this.fadeAnimation(this.runWeight, 0)
                    }
                    this.maxSpeed = 3;
                    break;
                }
            case this.states.Running:
                {
                    if (this.runWeight.value === 0) {
                        this.fadeAnimation(this.idleWeight, 0)
                        this.fadeAnimation(this.walkWeight, 0)
                        this.fadeAnimation(this.runWeight, 1)
                    }
                    this.maxSpeed = 8;

                    break;
                }
            case this.states.Jumping:
                {

                    break;
                }
            default:
                {
                    this.fadeAnimation(this.idleWeight, 1)
                    break;
                }
        }

        this.setWeight(this.idleAction, this.idleWeight.value);
        this.setWeight(this.walkAction, this.walkWeight.value);
        this.setWeight(this.runAction, this.runWeight.value);
        this.setWeight(this.jumpAction, this.jumpWeight.value);
    }

    setForce(deltaTime) {
        this.force.z = 0;
        this.force.x = 0;
        if (document.pointerLockElement === null) {
            this.state = this.states.Idle;
            return;
        }

        if (this.keySet.has('w')) {
            this.force.z += 1;
        }

        if (this.keySet.has('s')) {
            this.force.z -= 1;
        }

        if (this.keySet.has('a')) {
            this.force.x += 1;

        }

        if (this.keySet.has('d')) {
            this.force.x -= 1;
        }


        const length = Math.sqrt(this.force.z * this.force.z + this.force.x * this.force.x);

        if (length !== 0) {
            this.force.x /= length;
            this.force.z /= length;
            this.force.x *= this.maxSpeed;
            this.force.z *= this.maxSpeed;
            this.body.quaternion.copy(lookAt(this.body, this.meshDirection.position, deltaTime, true));
            this.mesh.quaternion.copy(lookAt(this.body, this.meshDirection.position, deltaTime, true));

        }
    }

    getPosition() {
        return this.mesh.position;
    }
    getRotation() {
        return this.mesh.quaternion;
    }
    updateCamera() {

        this.controls.maxDistance = 3.5;
        this.controls.minDistance = 3;
    }
    jump() {

        if (this.canJump && this.hasReleasedSpaceKey) {

            this.jumpAction.setEffectiveTimeScale(1);
            this.fadeAnimation(this.idleWeight, 0)
            this.fadeAnimation(this.walkWeight, 0)
            this.fadeAnimation(this.runWeight, 0)
            this.fadeAnimation(this.jumpWeight, 1)
            this.jumpAction.reset();
            this.jumpAction.repetitions = 1;
            this.state = this.states.Jumping;
            this.canJump = false;
            setTimeout(function () {
                this.fadeAnimation(this.idleWeight, 0)
                this.fadeAnimation(this.walkWeight, 0)
                this.fadeAnimation(this.runWeight, 0)
                this.body.applyForce(new CANNON.Vec3(0, 480, 0));
            }.bind(this), 150); //Time before execution
        }
    }
    async loadCharacter() {
        const mainGbl = await loadModel(this.characterType + '.glb')
        const walkAnimation = await loadModel('walking.glb')
        const runAnimation = await loadModel('running.glb')
        const jumpAnimation = await loadModel('jump.glb')
        const idleAnimation = await loadModel('idle.glb')
        const character = mainGbl.scene;
        character.animations =
            [idleAnimation.animations[0],
            jumpAnimation.animations[0],
            runAnimation.animations[0],
            walkAnimation.animations[0]]
        return character;

    }
    loadAnimations(model) {
        const animations = model.animations;
        this.mixer = new THREE.AnimationMixer(model);
        this.idleAction = this.mixer.clipAction(animations[0]);
        this.jumpAction = this.mixer.clipAction(animations[1]);
        this.runAction = this.mixer.clipAction(animations[2]);
        this.walkAction = this.mixer.clipAction(animations[3]);
        this.actions = [this.idleAction, this.walkAction, this.runAction, this.jumpAction];
        this.setWeight(this.idleAction, 0);
        this.setWeight(this.walkAction, 0);
        this.setWeight(this.runAction, 0);
        this.setWeight(this.jumpAction, 0);

        this.actions.forEach(function (action) {

            action.play();
            action.setEffectiveTimeScale(1);

        });
    }
    setWeight(action, weight) {

        action.enabled = true;
        action.setEffectiveWeight(weight);

    }
    fadeAnimation(subject, value) {


        // Create a timeline to handle the animation.
        gsap.to(subject, {
            duration: 0.2, // Animation duration in seconds (0 to 1)
            value,    // The end value (1 in this case)
            ease: "linear",
            onUpdate: () => {

            },

        });
    }

    createCSSRenderer() {
        const labelRender = new CSS2DRenderer();
        labelRender.setSize(window.innerWidth, window.innerHeight);
        labelRender.domElement.style.position = 'absolute'
        labelRender.domElement.style.top = '0px';
        labelRender.domElement.style.pointerEvents = 'none'
        document.body.appendChild(labelRender.domElement)
        return labelRender;
    }
    resize() {
        this.cssRenderer?.setSize(window.innerWidth, window.innerHeight);
        console.log('Resizing')
    }
    createLabel() {
        const p = document.createElement('h5');
        const name = document.querySelector('#name').value;
        this.playerName = name;
        if (name) {
            p.textContent = name;
        }
        else {
            this.playerName = 'User' + generateRandomRoomString();
            p.textContent = this.playerName;

        }
        const nameLabel = new CSS2DObject(p);
        this.scene.add(nameLabel)
        return nameLabel;
    }
}


