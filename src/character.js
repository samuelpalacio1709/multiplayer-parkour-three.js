import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as CANNON from 'cannon-es'
import { lookAt } from './utility';
import { OrbitControls } from './OrbitControls'


export class Character {

    constructor(scene, world, camera, renderer) {
        this.world = world;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.init();
    }

    init() {
        console.log('Creating character')
        //Mesh
        const geometry = new THREE.CapsuleGeometry(0.5, 1, 24, 24)
        const material = new THREE.MeshStandardMaterial();
        material.color = new THREE.Color('blue')
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.castShadow = true;
        this.mesh.position.y = 3;
        this.scene.add(this.mesh);
        this.maxSpeed = 5;
        this.force = new CANNON.Vec3(0, 0, 0)

        //Physics
        this.body = new CANNON.Body({
            mass: 1, // kg
            position: new CANNON.Vec3(0, 3, 0), // m
            shape: new CANNON.Box(new CANNON.Vec3(0.4, 1, 0.4)),
            material: new CANNON.Material() // Optional: set material properties

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
        this.controls.enableZoom = false; // Add this line to disable zooming
        this.controls.target.copy(this.getPosition()); // Set the target of the controls to your character's position
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
            this.canJump = true;

        }.bind(this));

        this.world.addBody(this.groundCheck);
        console.log(this.body)
        this.hasReleasedSpaceKey = true;

    }


    update(deltaTime) {

        const forwardVector = new THREE.Vector3();
        const cameraDirection = this.camera.getWorldDirection(forwardVector);




        // Create an "up" vector (assuming Y is the up direction)
        var upVector = new THREE.Vector3(0, 1, 0);

        // Calculate the right vector by taking the cross product

        this.rightVector = new THREE.Vector3();
        this.rightVector.crossVectors(forwardVector, upVector);

        this.setForce(deltaTime);
        this.body.velocity = new CANNON.Vec3(forwardVector.x * this.force.z + this.rightVector.x * -this.force.x,
            this.body.velocity.y,
            cameraDirection.z * this.force.z + this.rightVector.z * -this.force.x)

        this.mesh.position.copy(this.body.position);
        this.meshDirection.position.x = this.body.position.x + this.body.velocity.x
        this.meshDirection.position.z = this.body.position.z + this.body.velocity.z
        this.meshDirection.position.y = this.body.position.y



        this.controls.target.copy(new THREE.Vector3(this.getPosition().x, this.getPosition().y + 1.5, this.getPosition().z));
        this.controls.update();
        this.updateCamera();

        this.groundCheck.position.copy(new THREE.Vector3(this.getPosition().x, this.getPosition().y - 0.95, this.getPosition().z))
        this.groundCheck.applyForce(new CANNON.Vec3(0, 16, 0))
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


        // You can normalize the vector if needed
        const length = Math.sqrt(this.force.z * this.force.z + this.force.x * this.force.x);

        if (length !== 0) {
            this.force.x /= length;
            this.force.z /= length;
            this.force.x *= this.maxSpeed;
            this.force.z *= this.maxSpeed;
            this.body.quaternion.copy(lookAt(this.body, this.meshDirection.position, deltaTime, true));

        }


    }

    getPosition() {
        return this.mesh.position;
    }
    updateCamera() {

        this.controls.maxDistance = 4;
        this.controls.minDistance = 4;

        //this.camera.lookAt(new THREE.Vector3(this.getPosition().x, this.getPosition().y + 0.8, this.getPosition().z));
    }

    jump() {

        if (this.canJump && this.hasReleasedSpaceKey) {
            this.canJump = false;
            console.log('Jump')
            this.body.applyForce(new CANNON.Vec3(0, 500, 0))
        }

    }

}

