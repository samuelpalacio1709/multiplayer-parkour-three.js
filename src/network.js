import { io } from "socket.io-client";
import { characterSync } from "./characterSync";
let socket = null;
let players = new Map();
let scene = null;
export function connectToServer(game) {
    scene = game.scene;
    socket = io('https://server-parkour.onrender.com/parkourgame', { transports: ['websocket'] });
    socket.on('connect', () => {
        console.log('Connected as...', socket.id)
        socket.emit('ready', {})
        socket.on('playerMove', (playerInfo) => {
            syncCharacter(playerInfo)
        })
    })
    socket.on('playerleft', (id) => {
        removePlayer(id);
    })

}

export function syncPlayerInfo(character) {
    if (socket == null) return;
    socket.emit('playerMove', {
        id: socket.id,
        position: {
            x: character.getPosition().x,
            y: character.getPosition().y,
            z: character.getPosition().z
        },
        rotation: {
            w: character.getRotation().w,
            x: character.getRotation().x,
            y: character.getRotation().y,
            z: character.getRotation().z
        },
        animationsWeights: {
            idleWeight: character.idleWeight.value,
            walkWeight: character.walkWeight.value,
            runWeight: character.runWeight.value,
            jumpWeight: character.jumpWeight.value
        },
        playerName: character.playerName
    })
}

function syncCharacter(playerInfo) {
    if (!players.has(playerInfo.id)) {
        players.set(playerInfo.id, new characterSync(scene, playerInfo))
    }
    const player = players.get(playerInfo.id);
    player.syncPosition(playerInfo.position);
    player.syncRotation(playerInfo.rotation);
    player.syncAnimation(playerInfo.animationsWeights)

}

function removePlayer(playerId) {
    if (players?.has(playerId)) {
        const PLAYER = players.get(playerId);
        scene?.remove(PLAYER.mesh);
        PLAYER.mesh.geometry.dispose();
        if (PLAYER.mesh.material.map) {
            PLAYER.mesh.material.map.dispose();
        }
        PLAYER.mesh = null;
        players.delete(playerId)
    }
    console.log('Player wi id ' + playerId + ' Left the game')
    console.log(players)
}

export function updateCharacters(deltaTime) {
    players?.forEach((value, key) => {
        value?.update(deltaTime);
    });

}