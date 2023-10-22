import * as THREE from 'three';
import * as CANNON from 'cannon-es'
import { threeToCannon, ShapeType } from 'three-to-cannon';

import { loadModel } from './utility';
export async function CreateEnvironmnet(object, textureLoader, scene, world) {
    await textureLoader.load('textures/checker.jpg', async (texture) => {

        const environment = await loadModel('platforms.glb');
        const environmentMesh = environment.scene;

        for (let i = 0; i < environmentMesh.children.length; i++) {
            const mesh = environmentMesh.children[i];

            mesh.receiveShadow = true;

            const result = threeToCannon(mesh, { type: ShapeType.CYLINDER });
            const { shape, offset, quaternion } = result;
            const body = new CANNON.Body({
                mass: 0,
                position: mesh.position,
                collisionFilterGroup: 2,
                material: world.defaultMaterial
            });
            if (mesh.name == 'Finish') {

                const box = threeToCannon(mesh, { type: ShapeType.BOX });

                body.addShape(box.shape, new CANNON.Vec3(0, -mesh.scale.y / 3, 0), quaternion)
                body.collisionResponse = 0;
                body.userData = { name: 'finish' };

            }
            else {
                body.addShape(shape, new CANNON.Vec3(0, -mesh.scale.y / 3, 0), quaternion)

            }

            world.addBody(body);
        }
        scene.add(environmentMesh);
    })
}

