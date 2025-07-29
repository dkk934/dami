import * as THREE from "three";
import {
  movesQueue,
  stepCompleted,
  player,
  position,
} from "./Components/Player.js";
import { tileSize } from "./constants.js";

const clock = new THREE.Clock(false);

function setPosition(progress) {
  const startX = position.currentTile * tileSize;
  const startY = position.currentRow * tileSize;
  let endX = startX;
  let endY = startY; // Default to moving forward

  if (movesQueue[0] === "forward") endY += tileSize;
  if (movesQueue[0] === "backward") endY -= tileSize;
  if (movesQueue[0] === "left") endX -= tileSize;
  if (movesQueue[0] === "right") endX += tileSize;

  player.position.x = THREE.MathUtils.lerp(startX, endX, progress);
  player.position.y = THREE.MathUtils.lerp(startY, endY, progress); // Adjust Y position to avoid clipping with the ground
  // Ensure player.position.z returns to 0 after the swing
  player.children[0].position.z = Math.sin(progress * Math.PI) * 8;
}

function setRotation(progress) {
  let endRotation = 0;
  if (movesQueue[0] === "forward") endRotation = 0;
  if (movesQueue[0] === "backward") endRotation = Math.PI;
  if (movesQueue[0] === "left") endRotation = Math.PI / 2;
  if (movesQueue[0] === "right") endRotation = -Math.PI / 2;

  player.children[0].rotation.z = THREE.MathUtils.lerp(
    player.children[0].rotation.z,
    endRotation,
    progress
  );
}

export function animatePlayer() {
  if (!movesQueue.length) return;

  if (!clock.running) clock.start();

  const stepTime = 0.2; // Time for each step in seconds
  const progress = Math.min(1, clock.getElapsedTime() / stepTime);

  setPosition(progress);
  setRotation(progress);

  if (progress >= 1) {
    stepCompleted();
    clock.stop();
  }
}
