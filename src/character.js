import * as THREE from 'three';
import * as CANNON from 'cannon-es'
import { lookAt, loadModel, generateRandomRoomString } from './utility';
import { OrbitControls } from './OrbitControls'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { syncPlayerInfo, syncWinnner } from './network';
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
        this.manager = manager;
        this.ready = false;
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
        this.currentAction = null;
        this.setState(this.states.Idle);
        this.scene.add(this.mesh);
        this.maxSpeed = 3;
        this.force = new CANNON.Vec3(0, 0, 0)

        //Physics
        this.body = new CANNON.Body({
            mass: 1, // kg
            position: new CANNON.Vec3(0, 3, 0), // m
            shape: new CANNON.Cylinder(0.2, 0.2, 1.8),
            material: this.world.defaultMaterial

        });
        this.isPlayer = true;
        this.body.fixedRotation = true;
        this.body.updateMassProperties();
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
        this.contactNormal = new CANNON.Vec3()
        this.upAxis = new CANNON.Vec3(0, 1, 0)
        this.body.addEventListener("collide", function (e) {

            if (e.body.userData?.name == 'finish') {
                syncWinnner(this);

            }
            const contactNormal = e.contact.ni;
            const tolerance = 0.98;
            if (contactNormal.y > tolerance &&
                Math.abs(contactNormal.x) == 0 &&
                Math.abs(contactNormal.z == 0)) {

                if (this.canJump) return
                this.jumpAction.weightValue.value = 0;
                setTimeout(function () {
                    this.jumpAction.fadeOut(0.2);;
                }.bind(this), 10)
                this.canJump = true;

                this.setState(this.states.Idle);
            }

        }.bind(this));

        this.hasReleasedSpaceKey = true;
        this.ready = true;
        this.cssRenderer = this.createCSSRenderer()
        this.nameLabel = this.createLabel();
        setInterval(() => { syncPlayerInfo(this) }, 100)
        this.raycaster = new THREE.Raycaster();
        this.maxDistance = 0;

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

            this.mesh.position.copy(new THREE.Vector3(this.body.position.x, this.body.position.y - 0.9, this.body.position.z));
            this.meshDirection.position.x = this.body.position.x + this.body.velocity.x
            this.meshDirection.position.z = this.body.position.z + this.body.velocity.z
            this.meshDirection.position.y = this.body.position.y
            this.controls.target.copy(new THREE.Vector3(this.getPosition().x, this.getPosition().y + 2, this.getPosition().z));
            this.controls.update();
            this.updateCamera();
            this.updateStateMachine();
            this.mixer.update(deltaTime);
            this.nameLabel.position.set(this.getPosition().x, this.getPosition().y + 2, this.getPosition().z)
            this.cssRenderer.render(this.scene, this.camera);
            if (this.body.position.y < -45) {
                this.body.velocity = new CANNON.Vec3(0, 0, 0)
                this.body.position = this.getLastCheckPoint();
            }

            if (this.maxDistance < this.mesh.position.length()) {
                this.maxDistance = this.mesh.position.length();
            }

        }



    }

    handleInputDown(event) {
        if (document.pointerLockElement === null) {
            this.setState(this.states.Idle)
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
            this.setState(this.states.Idle)
            return;
        }

        if (this.keySet.has('shift')) {

            if (this.body.velocity.x != 0) {
                this.setState(this.states.Running)

            }
            else if (this.body.velocity.x <= 0) {
                this.setState(this.states.Idle)

            }
        }
        else if (this.keySet.has('w') || this.keySet.has('s') || this.keySet.has('a') || this.keySet.has('d')) {
            this.setState(this.states.Walking)
        }
        else {

            this.setState(this.states.Idle)
        }
    }

    performState() {
        switch (this.state) {
            case this.states.Idle:
                {

                    this.fadeAnimation(this.idleAction)
                    break;
                }

            case this.states.Walking:
                {
                    this.fadeAnimation(this.walkAction)
                    this.maxSpeed = 3;
                    break;
                }
            case this.states.Running:
                {
                    this.fadeAnimation(this.runAction)
                    this.maxSpeed = 8;
                    break;
                }
            case this.states.Jumping:
                {
                    this.jumpAction.weightValue.value = 1;
                    this.jumpAction
                        .reset()
                        .setEffectiveTimeScale(1)
                        .setEffectiveWeight(1)
                        .fadeIn(0.3)
                        .play();
                    break;
                }

        }
    }
    setState(state) {
        if (this.state !== state) {
            this.state = state;
            this.performState();
        }
    }

    setForce(deltaTime) {
        this.force.z = 0;
        this.force.x = 0;
        if (document.pointerLockElement === null) {
            this.setState(this.states.Idle)
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
        if (Math.abs(this.body.position.y - this.body.previousPosition.y) > 0.09) {
            return;
        }
        if (this.canJump && this.hasReleasedSpaceKey) {

            // this.jumpAction.setEffectiveTimeScale(1.3);
            // this.jumpAction.reset();
            // this.jumpAction.repetitions = 1;
            this.canJump = false;
            this.body.velocity.y = 1.5
            setTimeout(function () {
                this.body.applyForce(new CANNON.Vec3(0, 500, 0));
            }.bind(this), 100)
            this.setState(this.states.Jumping)
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

        this.idleAction.weightValue = { value: 1 };
        this.jumpAction.weightValue = { value: 0 };
        this.runAction.weightValue = { value: 0 };
        this.walkAction.weightValue = { value: 0 };

        this.actions = [this.idleAction, this.walkAction, this.runAction, this.jumpAction];
        this.actions.forEach(function (action) {
            action.play();
            action.setEffectiveTimeScale(1);
            action.enabled = true;
            action.setEffectiveWeight(1)
            action.fadeOut(0.1)
        });
    }

    getLastCheckPoint() {

        if (this.maxDistance < 96) {
            return new CANNON.Vec3(0, 4, 0);

        }


        if (this.maxDistance < 146) {
            return new CANNON.Vec3(34, 6, -90);
        }

        return new CANNON.Vec3(63.3, 2.8, -132.6);

    }

    fadeAnimation(action) {


        if (!this.currentAction) {
            action.fadeIn(0.3)
            this.currentAction = action;
            action.weightValue.value = 1;

            return;
        }

        if (this.currentAction != action) {
            this.currentAction.fadeOut(0.3)
            action.weightValue.value = 1;
            this.currentAction.weightValue.value = 0;

            action
                .reset()
                .setEffectiveTimeScale(1)
                .setEffectiveWeight(1)
                .fadeIn(0.3)
                .play();
        }
        this.currentAction = action


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

    reset() {
        this.maxDistance = 0;
        this.body.position = this.getLastCheckPoint();

    }
}


