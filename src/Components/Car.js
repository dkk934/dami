import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel.js";

export function Car(initialTileIndex, color, direction) {
  const car = new THREE.Group();
  car.position.x = initialTileIndex * tileSize;
  if (!direction) car.rotation.z = Math.PI; // Rotate if direction is false

  const main = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color, flatShading: true })
  );
  main.position.z = 12;
    main.castShadow = true; // Allow the car to cast shadows
    main.receiveShadow = true; // Allow the car to receive shadows
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12),
    new THREE.MeshLambertMaterial({ color: "white", flatShading: true })
  );

  cabin.position.x = -6;
  cabin.position.z = 25.5;
    cabin.castShadow = true; // Allow the cabin to cast shadows
    cabin.receiveShadow = true; // Allow the cabin to receive shadows
  car.add(cabin);

  const fontWheel = Wheel(18);
  car.add(fontWheel);

  const backWheel = Wheel(-18);
  car.add(backWheel);

  return car;
}
