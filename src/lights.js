
import * as THREE from 'three';

export function createLights(scene) {

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);

    // Set the light's position
    directionalLight.position.set(1, 10, 0);

    // Enable shadow casting for the light
    directionalLight.castShadow = false;

    directionalLight.shadow.mapSize.width = 1024;  // Set the shadow map width
    directionalLight.shadow.mapSize.height = 1024; // Set the shadow map height
    directionalLight.shadow.camera.near = 0.1;     // Near plane of the shadow camera
    directionalLight.shadow.camera.far = 100;      // Far plane of the shadow camera

    // Set the shadow map type for soft shadows

    directionalLight.shadow.camera.updateProjectionMatrix();

    // Add the directional light to your scene
    scene.add(directionalLight);


}