import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new GLTFLoader();
export function lookAt(objectToRotate, targetPosition, delta, lockRotation) {
    targetPosition = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z);
    let direction = new THREE.Vector3();
    direction = targetPosition.sub(objectToRotate.position).normalize();

    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);

    const quatA = objectToRotate.quaternion.clone();
    const quatB = quaternion;

    const resultQuaternion = new THREE.Quaternion();
    resultQuaternion.copy(quatA);
    resultQuaternion.slerp(quatB, delta * 7);
    const euler = new THREE.Euler().setFromQuaternion(resultQuaternion, "YXZ");
    if (lockRotation) {
        euler.x = 0;
        euler.z = 0;
    }

    return new THREE.Quaternion().setFromEuler(euler);
}
export function toRad(deg) {
    return (deg * (Math.PI / 180))
}
export function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}
export function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

export async function loadModel(path) {
    return new Promise((resolve, reject) => {
        loader.load('models/' + path,
            function (glb) {
                resolve((glb))
            }
        );

    });

}
export function generateRandomRoomString() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString();
}

export function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}
