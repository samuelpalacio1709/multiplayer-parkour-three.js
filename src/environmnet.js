import * as THREE from 'three';
import * as CANNON from 'cannon-es'

import { loadModel } from './utility';
export async function CreateEnvironmnet(object, textureLoader, scene, world) {
    await textureLoader.load('textures/checker.jpg', async (texture) => {

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        const groundMaterial = new THREE.MeshStandardMaterial({ color: 'white', map: texture });

        object.children[0].material = groundMaterial;
        object.children[0].receiveShadow = true; // Enable shadow receiving
        object.children[0].castShadow = true; // Enable shadow receiving

        // const suzane = await loadModel('suzane.glb');
        // const meshSuzane = suzane.scene;
        // meshSuzane.position.set(0, 2, 2)
        // var vertices = [];
        // var faces = [];

        // meshSuzane.traverse(function (child) {
        //     if (child instanceof THREE.Mesh) {
        //         // Extract vertices from the child geometry
        //         var geometry = child.geometry;
        //         vertices = vertices.concat(geometry.attributes.position.array);

        //         // Extract faces (indices) from the child geometry
        //         var indices = geometry.index.array;
        //         for (var i = 0; i < indices.length; i += 3) {
        //             faces.push([indices[i], indices[i + 1], indices[i + 2]]);
        //         }
        //     }
        // });
        // const convexBody = new CANNON.ConvexPolyhedron(vertices, faces);
        // var environmentBody = new CANNON.Body({
        //     mass: 1, // Set mass
        // });
        // environmentBody.addShape(convexBody);
        // environmentBody.scale = new CANNON.Vec3(100, 100, 100)
        // world.addBody(environmentBody);
        // scene.add(meshSuzane);
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
        const box_6 = new CANNON.Body({
            mass: 50000, // kg
            position: new CANNON.Vec3(6, 0.5, 10), // m
            shape: new CANNON.Box(new CANNON.Vec3(1, 0.5, 3)),
            material: collisionMaterial,
        });

        world.addBody(box_1);
        world.addBody(box_2);
        world.addBody(box_3);
        world.addBody(box_4);
        world.addBody(box_5);
    })
}