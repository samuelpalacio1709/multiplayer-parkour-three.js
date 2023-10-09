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
        this.maxSpeed = 3;
        this.force = new CANNON.Vec3(0, 0, 0)
        //Physics
        const radius = 1; // m
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
        document.addEventListener('keypress', this.handleInputDown.bind(this));
        document.addEventListener('keyup', this.handleInputUp.bind(this));


    }


    update() {
        this.body.velocity = new CANNON.Vec3(this.force.x, this.body.velocity.y, this.force.z)

        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);

    }

    handleInputDown(event) {
        if (this.force.z === 0) {
            if (event.key.toLowerCase() === 'w') {

                this.force.z = 1 * this.maxSpeed;
            }
            else if (event.key.toLowerCase() === 's') {
                this.force.z = -1 * this.maxSpeed;;
            }
        }

        if (this.force.x === 0) {
            if (event.key.toLowerCase() === 'd') {
                this.force.x = -1 * this.maxSpeed;;

            } else if (event.key.toLowerCase() === 'a') {
                this.force.x = 1 * this.maxSpeed;;
            }
        }


    }

    handleInputUp(event) {


        if (event.key.toLowerCase() === 'w' && this.force.z > 0) {
            this.force.z = 0;
        }
        else if (event.key.toLowerCase() === 's' && this.force.z < 0) {
            this.force.z = 0;
        }

        if (event.key.toLowerCase() === 'd' && this.force.x < 0) {
            this.force.x = 0;

        } else if (event.key.toLowerCase() === 'a' && this.force.x > 0) {
            this.force.x = 0;
        }
    }
}

