import { io } from "socket.io-client";
import { characterSync } from "./characterSync";
import { generateRandomRoomString } from './utility';
import * as THREE from 'three'
import { showWinner } from "./ui.controller";
let socket = null;
let players = new Map();
let scene = null;
let publicRoom = true;
let roomName = 0;
let character = null;
let allPlayers = new Map();
const URL = 'server-parkour.onrender.com' //https://server-parkour.onrender.com'https:///init
fetch('https://' + URL + '/init').then((response) => response.json()).then(data => { console.log(data.status) })
export function connectToServer(game) {
    scene = game.scene;
    publicRoom = game.publicRoom
    character = game.character;
    document.querySelector('#messages').classList.remove('hide')
    fetch('https://' + URL + '/init').then((response) => response.json())
        .then(function (data) {
            if (data.status === 'active') {
                socket = io(URL + '/parkourgame', { transports: ['websocket'] });
                socket.on('connect', () => {

                    console.log('Connected as...', socket.id)
                    setInterval(showPlayerList, 500)
                    document.querySelector('#players').classList.remove('hide')

                    allPlayers.set(socket.id, game.character)
                    document.querySelector('#messages').classList.add('hide')
                    socket.emit('ready', { room: generateRandomRoomString(), publicRoom, customRoom: game.customRoom })
                    socket.on('playerMove', (playerInfo) => {
                        syncCharacter(playerInfo)
                    })
                    socket.on('playerleft', (id) => {
                        removePlayer(id);
                    })
                    socket.on('player-joined', data => {
                        document.querySelector('#rooms').classList.remove('hide')
                        document.querySelector('#roomid').innerHTML = 'Room: ' + data.room

                    })
                    socket.on('playerWon', (playerInfo) => {
                        showWinner(playerInfo.name)
                        character?.reset();
                    })
                })

            }

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
            idleWeight: character.idleAction.weightValue.value,
            walkWeight: character.walkAction.weightValue.value,
            runWeight: character.runAction.weightValue.value,
            jumpWeight: character.jumpAction.weightValue.value
        },
        playerName: character.playerName,
        characterType: character.characterType
    })
}

function syncCharacter(playerInfo) {
    if (!players.has(playerInfo.id) && playerInfo.id !== undefined) {
        console.log('Player With id to be synced' + playerInfo.id)
        const newPlayer = new characterSync(scene, playerInfo)
        allPlayers.set(playerInfo.id, newPlayer)
        console.log(allPlayers)
        players.set(playerInfo.id, newPlayer)
    }
    const player = players.get(playerInfo.id);
    player?.syncPosition(playerInfo.position);
    player?.syncRotation(playerInfo.rotation);
    player?.syncAnimation(playerInfo.animationsWeights)

}

function removePlayer(playerId) {
    if (players?.has(playerId)) {
        const PLAYER = players.get(playerId);
        PLAYER.remove();
        players.delete(playerId)
    }
    if (allPlayers?.has(playerId)) {

        allPlayers.delete(playerId)
    }

    console.log('Player wi id ' + playerId + ' Left the game')

}

export function updateCharacters(deltaTime) {
    players?.forEach((value, key) => {
        value?.update(deltaTime);
    });

}

export function syncWinnner(character) {
    socket?.emit('playerWon', { name: character.playerName })
}

function showPlayerList() {
    const playersList = Array.from(allPlayers);
    const point = new THREE.Vector3(0, 0, 0)
    if (playersList.length > 1) {
        playersList.sort((x, y) => (x[1].getPosition()?.distanceTo(point))
            < (y[1].getPosition()?.distanceTo(point)) ? 1 : -1)
    }
    document.querySelector('#players-list').innerHTML =
        playersList.map(function (player, index) {

            if (player[0] === socket?.id) {
                return `
                    <div class="player-info">
                        <span class='yellow'>${index + 1}</span>
                        <span class='yellow'>${player[1].playerName}</span>
                        <span class='yellow'>${Math.floor(player[1].getPosition().distanceTo(point) + 0.15)} m</span>
                    </div>`
            }
            else {
                return `
                    <div class="player-info">
                        <span>${index + 1}</span>
                        <span>${player[1].playerName}</span>
                        <span>${Math.floor(player[1].getPosition().distanceTo(point) + 0.15)} m</span>
                    </div>`
            }

        }).join('');

}

