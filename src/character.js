import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as CANNON from 'cannon'
import { clampSpeed } from './utility';
export class Character {

    constructor(scene, world) {
        this.world = world;
        this.scene = scene;
        this.init();
    }

    init() {
        console.log('Creating character')
        //Mesh
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshStandardMaterial();
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.castShadow = true;
        this.mesh.position.y = 2;
        this.scene.add(this.mesh);
        this.maxSpeed = 5;
        this.force = new CANNON.Vec3(0, 0, 0)
        //Physics
        this.body = new CANNON.Body({
            mass: 1, // kg
            position: new CANNON.Vec3(0, 2, 0), // m
            shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
            material: new CANNON.Material() // Optional: set material properties

        });
        this.body.fixedRotation = true;
        this.body.updateMassProperties();
        this.body.material.friction = 0;
        this.world.addBody(this.body);
        this.keySet = new Set();
        document.addEventListener('keydown', this.handleInputDown.bind(this));
        document.addEventListener('keyup', this.handleInputUp.bind(this));


    }


    update() {
        this.setForce();
        this.body.velocity = new CANNON.Vec3(this.force.x, this.body.velocity.y, this.force.z)
        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);

    }

    handleInputDown(event) {
        this.keySet.add(event.key.toLowerCase())
    }

    handleInputUp(event) {
        this.keySet.delete(event.key.toLowerCase())
    }

    setForce() {
        this.force.z = 0;
        this.force.x = 0;

        if (this.keySet.has('w')) {
            this.force.z = 1;
        }

        if (this.keySet.has('s')) {
            this.force.z = -1;
        }

        if (this.keySet.has('a')) {
            this.force.x = 1;

        }

        if (this.keySet.has('d')) {
            this.force.x = -1;
        }

        if (this.keySet.has('d') && this.keySet.has('a')) {
            this.force.x = 0;
            this.force.z = 0;
        }
        if (this.keySet.has('w') && this.keySet.has('s')) {
            this.force.x = 0;
            this.force.z = 0;
        }

        // You can normalize the vector if needed
        const length = Math.sqrt(this.force.z * this.force.z + this.force.x * this.force.x);

        if (length !== 0) {
            this.force.x /= length;
            this.force.z /= length;
            this.force.x *= this.maxSpeed;
            this.force.z *= this.maxSpeed;
        }


    }
}
