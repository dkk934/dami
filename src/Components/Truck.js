import * as THREE from "three";
import { Wheel } from "./Wheel";
import { tileSize } from "../constants";

export function Truck(type, initialTileIndex, color, direction) {
  const truck = new THREE.Group();
  truck.position.x = initialTileIndex * tileSize;
  if (!direction) truck.rotation.z = Math.PI; // Rotate if direction is false

  const cargo = new THREE.Mesh(
    new THREE.BoxGeometry(70, 35, 35),
    new THREE.MeshLambertMaterial({ color: 0xb4c6fc, flatShading: true })
  );
  cargo.position.x = -15;
  cargo.position.z = 25;
  truck.add(cargo);
  cargo.castShadow = true; // Allow the cargo to cast shadows
  cargo.receiveShadow = true; // Allow the cargo to receive shadows

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 30),
    new THREE.MeshLambertMaterial({ color, flatShading: true })
  );
  cabin.receiveShadow = true; // Allow the cabin to receive shadows
  cabin.castShadow = true; // Allow the cabin to cast shadows

  cabin.position.x = 35;
  cabin.position.z = 20;
  truck.add(cabin);

  const frontWheel = Wheel(37, type);
  truck.add(frontWheel);

  const backWheel1 = Wheel(5, type);
  truck.add(backWheel1);

  const backWheel2 = Wheel(-35, type);
  truck.add(backWheel2);

  return truck;
}
