import * as THREE from 'three';
import { lerp, easeOutCubic, loadModel } from './utility';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class characterSync {
    constructor(scene, playerInfo) {
        this.scene = scene;
        this.position = new THREE.Vector3(
            playerInfo.position.x,
            playerInfo.position.y,
            playerInfo.position.z);
        this.quaternion = new THREE.Quaternion(
            playerInfo.rotation.x,
            playerInfo.rotation.y,
            playerInfo.rotation.z,
            playerInfo.rotation.w);
        this.SmoothingDelay = 5;
        this.walkWeight = 0;
        this.runWeight = 0;
        this.idleWeight = 0;
        this.jumpWeight = 0;
        this.characterType = playerInfo.characterType;
        this.createLabel(playerInfo.playerName)
        this.init();

    }
    async init() {
        this.mesh = null;
        let character = await this.loadCharacter();
        this.loadAnimations(character)
        this.mesh = character;
        character.traverse(function (object) {
            if (object.isMesh) object.castShadow = true;
        });
        this.scene.add(this.mesh);
        this.loadAnimations(character)
    }
    syncPosition(newPosition) {
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
        this.position.z = newPosition.z;
    }
    syncRotation(newRotation) {
        this.quaternion.x = newRotation.x;
        this.quaternion.y = newRotation.y;
        this.quaternion.z = newRotation.z;
        this.quaternion.w = newRotation.w;
    }
    syncAnimation(animationWeights) {
        this.idleWeight = animationWeights.idleWeight;
        this.walkWeight = animationWeights.walkWeight;
        this.runWeight = animationWeights.runWeight;
        this.jumpWeight = animationWeights.jumpWeight;
    }
    update(deltaTime) {
        if (this.mesh === null) return;
        this.updatePosition(deltaTime);
        this.updateRotation(deltaTime);
        this.updateAnimations(deltaTime);
        this.nameLabel?.position.set(this.mesh.position.x, this.mesh.position.y + 2, this.mesh.position.z)

    }

    updatePosition(deltaTime) {
        const t = Math.min(1, easeOutCubic(deltaTime * this.SmoothingDelay));
        const interpolatedPosition = new THREE.Vector3().lerpVectors(this.mesh.position, this.position, t);
        this.mesh.position.copy(interpolatedPosition);
    }
    updateRotation(deltaTime) {
        const t = Math.min(1, deltaTime * this.SmoothingDelay);
        const interpolatedRotation = new THREE.Quaternion().slerpQuaternions(this.mesh.quaternion, this.quaternion, t);
        this.mesh.quaternion.copy(interpolatedRotation);
    }
    updateAnimations(deltaTime) {
        const t = Math.min(1, deltaTime * this.SmoothingDelay);

        this.setWeight(this.idleAction, lerp(this.idleAction.weight, this.idleWeight, t));
        this.setWeight(this.walkAction, lerp(this.walkAction.weight, this.walkWeight, t));
        this.setWeight(this.runAction, lerp(this.runAction.weight, this.runWeight, t));
        this.setWeight(this.jumpAction, lerp(this.jumpAction.weight, this.jumpWeight, t));

        this.mixer?.update(deltaTime);
    }

    loadAnimations(model) {
        const animations = model.animations;
        this.mixer = new THREE.AnimationMixer(model);
        this.idleAction = this.mixer.clipAction(animations[0]);
        this.jumpAction = this.mixer.clipAction(animations[1]);
        this.runAction = this.mixer.clipAction(animations[2]);
        this.walkAction = this.mixer.clipAction(animations[3]);
        this.actions = [this.idleAction, this.walkAction, this.runAction, this.jumpAction];
        this.setWeight(this.idleAction, 1);
        this.setWeight(this.walkAction, 0);
        this.setWeight(this.runAction, 0);
        this.setWeight(this.jumpAction, 0);

        this.actions.forEach(function (action) {
            action.play();
            action.setEffectiveTimeScale(1.3);
        });
    }
    async loadCharacter() {

        const mainGbl = await loadModel(this.characterType + '.glb')
        const walkAnimation = await loadModel('walking.glb')
        const runAnimation = await loadModel('running.glb')
        const jumpAnimation = await loadModel('falling.glb')
        const idleAnimation = await loadModel('idle.glb')
        const character = mainGbl.scene;

        character.animations =
            [idleAnimation.animations[0],
            jumpAnimation.animations[0],
            runAnimation.animations[0],
            walkAnimation.animations[0]]
        return character;


    }
    setWeight(action, weight) {
        action.play();
        action.enabled = true;
        action.setEffectiveWeight(weight);

    }
    createLabel(name) {
        const p = document.createElement('h6');
        this.playerName = name;
        if (name) {
            p.textContent = name;
        }
        else {
            p.textContent = 'Random';

        }
        const nameLabel = new CSS2DObject(p);
        this.scene.add(nameLabel)
        this.nameLabel = nameLabel;
    }
    remove() {
        this.scene?.remove(this.mesh);
        this.scene?.remove(this.nameLabel);

        this.loader = null;
        this.mesh = null;
    }
    getPosition() {
        return this.mesh?.position;
    }


}