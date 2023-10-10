import * as THREE from 'three';

export function lookAt(objectToRotate, targetPosition, delta) {
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
    euler.x = 0;
    euler.z = 0;
    return new THREE.Quaternion().setFromEuler(euler);
}
export function toRad(deg) {
    return (deg * (Math.PI / 180))
}