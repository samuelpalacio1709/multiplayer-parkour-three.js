
import * as THREE from 'three';

export function createLights(scene) {

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(10, 10, 10);

    const directionalLight_2 = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight_2.position.set(-10, 10, -10);



    scene.add(directionalLight);
    scene.add(directionalLight_2);


}