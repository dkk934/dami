import * as THREE from "three";
import { endsUpInValidPosition } from "../utilities/endsUpInValidPosition";
import { metadata as rows, addRows } from "./Map";

export const player = Player();

export const position = {
  currentRow: 0, // Current row index of the player
  currentTile: 0, // Current tile index within the row
};

export const movesQueue = []; // Queue for player moves

export function initializePlayer(){
  player.position.x = 0;
  player.position.y = 0;
  player.children[0].position.z = 0;

  position.currentRow = 0
  position.currentTile = 0

  movesQueue.length = 0
}
export function queueMove(move) {
  const isValidMove = endsUpInValidPosition(
    { rowIndex: position.currentRow, tileIndex: position.currentTile },
    [...movesQueue, move]
  );
  if (!isValidMove) return;

  movesQueue.push(move);
}

export function stepCompleted() {
  const move = movesQueue.shift();
  if (move === "forward") position.currentRow += 1; // Move forward by one tile
  if (move === "backward") position.currentRow -= 1; // Move backward by one tile
  if (move === "left") position.currentTile -= 1; // Move left by one tile
  if (move === "right") position.currentTile += 1; // Move right by one tile

  if (position.currentRow > rows.length - 10) addRows(); // Add more rows if needed

  const scoreDOM = document.getElementById("score");
  if (scoreDOM) scoreDOM.innerHTML = position.currentRow.toString();
}

function Player() {
  const player = new THREE.Group(); // Create a new group for the player
  // Create a geometry for the player (a cube)
  const geometry = new THREE.BoxGeometry(15, 15, 20);
  // Create a material for the player with a color
  const material = new THREE.MeshLambertMaterial({
    color: 0xff4444,
    flatShading: true,
  });
  // Create a mesh combining the geometry and material
  const body = new THREE.Mesh(geometry, material);

  // Set the player's position in the scene
  body.position.z = 10; // Position the player slightly above the ground
  body.castShadow = true; // Allow the player to cast shadows
  body.receiveShadow = true; // Allow the player to receive shadows
  player.add(body); // Add the body mesh to the player group

  const cap = new THREE.Mesh(
    new THREE.BoxGeometry(2, 4, 2),
    new THREE.MeshLambertMaterial({ color: 0xf0619a, flatShading: true })
  );
  cap.position.z = 21; // Position the cap above the body
  cap.castShadow = true; // Allow the cap to cast shadows
  cap.receiveShadow = true; // Allow the cap to receive shadows
  player.add(cap); // Add the cap mesh to the player group
  
  const playerContainer = new THREE.Group();
  playerContainer.add(player)


  return playerContainer;
}
