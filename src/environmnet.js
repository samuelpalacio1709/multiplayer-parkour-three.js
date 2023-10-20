import * as THREE from 'three';
import * as CANNON from 'cannon-es'
import { threeToCannon, ShapeType } from 'three-to-cannon';

import { loadModel } from './utility';
export async function CreateEnvironmnet(object, textureLoader, scene, world) {
    await textureLoader.load('textures/checker.jpg', async (texture) => {

        const environment = await loadModel('platforms.glb');
        const environmentMesh = environment.scene;
        console.log(environmentMesh)

        for (let i = 0; i < environmentMesh.children.length; i++) {
            const mesh = environmentMesh.children[i];
            mesh.receiveShadow = true; // Enable shadow receiving
            const result = threeToCannon(mesh, { type: ShapeType.CYLINDER });
            const { shape, offset, quaternion } = result;
            console.log(result)
            const body = new CANNON.Body({
                mass: 0,
                position: mesh.position,
                collisionFilterGroup: 2,
                material: world.defaultMaterial
            });
            body.addShape(shape, new CANNON.Vec3(0, -mesh.scale.y / 3, 0), quaternion)
            world.addBody(body);
        }
        scene.add(environmentMesh);


        // 
        // const groundMaterial = new THREE.MeshStandardMaterial({ color: 'white', map: texture });

        // object.children[0].material = groundMaterial;
        // object.children[0].receiveShadow = true; // Enable shadow receiving
        // object.children[0].castShadow = true; // Enable shadow receiving

        // const suzane = await loadModel('suzane.glb');
        // const meshSuzane = suzane.scene;
        // meshSuzane.position.set(2, 3.5, 0)
        // const result = threeToCannon(meshSuzane, { type: ShapeType.HULL });
        // const { shape, offset, quaternion } = result;

        // console.log(shape, offset, quaternion)
        // const environmentBody = new CANNON.Body({
        //     mass: 0, // Set mass
        //     position: meshSuzane.position,
        //     collisionFilterGroup: 2,
        //     material: world.defaultMaterial


        // });
        // environmentBody.addShape(shape, offset, quaternion)
        // world.addBody(environmentBody);

        // scene.add(meshSuzane);
        // scene.add(object);

        // //physics

        // const box_1 = new CANNON.Body({
        //     mass: 0, // kg
        //     position: new CANNON.Vec3(0, 1.5, 5), // m
        //     shape: new CANNON.Box(new CANNON.Vec3(1, 1.5, 1)),
        //     collisionFilterGroup: 2,
        //     material: world.defaultMaterial



        // });
        // const box_2 = new CANNON.Body({
        //     mass: 0, // kg
        //     position: new CANNON.Vec3(3, 1, 3), // m
        //     shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
        //     collisionFilterGroup: 2,
        //     material: world.defaultMaterial



        // });
        // const box_3 = new CANNON.Body({
        //     mass: 0, // kg
        //     position: new CANNON.Vec3(6, 0.5, 0), // m
        //     shape: new CANNON.Box(new CANNON.Vec3(1, 0.5, 1)),
        //     collisionFilterGroup: 2,
        //     material: world.defaultMaterial



        // });
        // const box_4 = new CANNON.Body({
        //     mass: 0, // kg
        //     position: new CANNON.Vec3(-6, 1, 12), // m
        //     shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
        //     collisionFilterGroup: 2,
        //     material: world.defaultMaterial



        // });
        // const box_5 = new CANNON.Body({
        //     mass: 0, // kg
        //     position: new CANNON.Vec3(-7, 2.5, -12), // m
        //     shape: new CANNON.Box(new CANNON.Vec3(1, 2.5, 1)),
        //     collisionFilterGroup: 2,
        //     material: world.defaultMaterial

        // });


        // world.addBody(box_1);
        // world.addBody(box_2);
        // world.addBody(box_3);
        // world.addBody(box_4);
        // world.addBody(box_5);
    })
}