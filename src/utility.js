export function clampSpeed(myVector, maxSpeed) {

    var length = Math.sqrt(myVector.x * myVector.x + myVector.y * myVector.y + myVector.z * myVector.z);

    if (length !== 0) {
        myVector.x /= length;
        myVector.z /= length;

        myVector.x *= maxSpeed;
        myVector.z *= maxSpeed;

    }
    return myVector;
}