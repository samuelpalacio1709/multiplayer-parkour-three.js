import * as THREE from 'three';
import * as CANNON from 'cannon-es'

export async function CreateEnvironmnet(object, textureLoader, scene, world) {


    await textureLoader.load('textures/checker.jpg', (texture) => {

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        const groundMaterial = new THREE.MeshStandardMaterial({ color: 'white', map: texture });

        object.children[0].material = groundMaterial;
        object.children[0].receiveShadow = true; // Enable shadow receiving
        object.children[0].castShadow = true; // Enable shadow receiving
        scene.add(object);

        //physics
        const collisionMaterial = new CANNON.Material()
        collisionMaterial.friction = 0;
        const box_1 = new CANNON.Body({
            mass: 0, // kg
            position: new CANNON.Vec3(0, 1.5, 5), // m
            shape: new CANNON.Box(new CANNON.Vec3(1, 1.5, 1)),
            material: collisionMaterial

        });
        const box_2 = new CANNON.Body({
            mass: 0, // kg
            position: new CANNON.Vec3(3, 1, 3), // m
            shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
            material: collisionMaterial

        });
        const box_3 = new CANNON.Body({
            mass: 0, // kg
            position: new CANNON.Vec3(6, 0.5, 0), // m
            shape: new CANNON.Box(new CANNON.Vec3(1, 0.5, 1)),
            material: collisionMaterial

        });
        const box_4 = new CANNON.Body({
            mass: 0, // kg
            position: new CANNON.Vec3(-6, 1, 12), // m
            shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
            material: collisionMaterial

        });
        const box_5 = new CANNON.Body({
            mass: 0, // kg
            position: new CANNON.Vec3(-7, 2.5, -12), // m
            shape: new CANNON.Box(new CANNON.Vec3(1, 2.5, 1)),
            material: collisionMaterial

        });
        world.addBody(box_1);
        world.addBody(box_2);
        world.addBody(box_3);
        world.addBody(box_4);
        world.addBody(box_5);


    })
    //scene.add(object)

}