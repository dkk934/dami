import * as THREE from "three";

export function DirectionalLight() {
  const dirlight = new THREE.DirectionalLight();
  dirlight.position.set(-100, -100, 200); // Set the position of the dirlight
  dirlight.up.set(0, 0, 1); // Set the up direction of the light
  dirlight.castShadow = true; // Enable shadow casting

  // Configure shadow properties
  dirlight.shadow.mapSize.width = 2048; // Default is 512
  dirlight.shadow.mapSize.height = 2048; // Default is 512

  dirlight.shadow.camera.up.set(0, 0, 1); // Set the up direction of the shadow camera
  dirlight.shadow.camera.near = 50; // Default is 0.5
  dirlight.shadow.camera.left = -400; // Default is -500
  dirlight.shadow.camera.right = 400; // Default is 500
  dirlight.shadow.camera.top = 400; // Default is 500
  dirlight.shadow.camera.bottom = -400; // Default is -500
  dirlight.shadow.camera.far = 400; // Default is 500

  return dirlight;
}
