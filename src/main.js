// main.js
import * as THREE from "three";
import { Render } from "./Components/Rander.js";
import { Camera } from "./Components/Camera.js";
import { player, initializePlayer } from "./Components/Player.js";
import { map, initializeMap } from "./Components/Map.js";
import { DirectionalLight } from "./Components/DirectionalLight.js";
import { animateVehicles } from "./AnimateVehicles.js";
import "./collectUserInput.js"; // Import user input handling
import { animatePlayer } from "./animatePlayer.js";
import { hitTest } from "./hitTest.js";

// Scene
const scene = new THREE.Scene();
scene.add(player); // Player
scene.add(map); // Map

// Light
const ambientLight = new THREE.AmbientLight(); // soft white light
scene.add(ambientLight);

const dirlight = DirectionalLight();
dirlight.target = player;
player.add(dirlight);

// Camera
const camera = Camera();
// scene.add(camera);
player.add(camera);

const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

initializeGame(); // Initialize the map with grass

document.querySelector("#retry")?.addEventListener("click", initializeGame);

function initializeGame() {
  initializePlayer();
  initializeMap();

  if (scoreDOM) scoreDOM.innerText = "0";
  if (resultDOM) resultDOM.style.visibility = "hidden";
}

// Renderer
const renderer = Render();
renderer.setAnimationLoop(animate);

// Animation loop
function animate() {
  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}
