import * as THREE from 'three';
import * as CANNON from 'cannon-es'
import { lookAt } from './utility';
import { OrbitControls } from './OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';


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
        this.fadeAnimation(this.idleWeight, 1)
        this.init();
    }

    async init() {
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
            shape: new CANNON.Sphere(0.1),
            material: new CANNON.Material()

        });
        this.groundCheck.collisionResponse = 0;
        this.groundCheck.addEventListener("collide", function (e) {

            this.fadeAnimation(this.jumpWeight, 0)
            this.canJump = true;

        }.bind(this));

        this.world.addBody(this.groundCheck);
        console.log(this.body)
        this.hasReleasedSpaceKey = true;
        this.ready = true;

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


        }

    }

    handleInputDown(event) {
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
        if (this.keySet.has('shift')) {

            if (this.body.velocity.x != 0) {
                this.state = this.states.Running;
            }
        }
        else if (this.keySet.has('w') || this.keySet.has('s') || this.keySet.has('a') || this.keySet.has('d')) {
            this.state = this.states.Walking;

        }
        else {

            this.state = this.states.Idle;
        }
        console.log(this.body.velocity)

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
            default: t
        }

        this.setWeight(this.idleAction, this.idleWeight.value);
        this.setWeight(this.walkAction, this.walkWeight.value);
        this.setWeight(this.runAction, this.runWeight.value);
        this.setWeight(this.jumpAction, this.jumpWeight.value);
    }

    setForce(deltaTime) {
        this.force.z = 0;
        this.force.x = 0;

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
    updateCamera() {

        this.controls.maxDistance = 3.5;
        this.controls.minDistance = 3;
    }
    jump() {

        if (this.canJump && this.hasReleasedSpaceKey) {

            this.jumpAction.setEffectiveTimeScale(4)
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
                this.body.applyForce(new CANNON.Vec3(0, 450, 0));
            }.bind(this), 150); //Time before execution
        }
    }
    async loadCharacter() {

        return new Promise((resolve, reject) => {

            const loader = new GLTFLoader(this.manager);
            loader.load('models/character.glb',
                // called when the resource is loaded
                function (glb) {
                    console.log(glb)
                    glb.scene.animations = glb.animations;
                    resolve((glb.scene));



                }.bind(this),
                // called while loading is progressing
                function (xhr) {

                },
                // called when loading has errors
                function (error) {

                    console.log('An error happened');

                }
            );

        });

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

}


