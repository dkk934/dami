import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Road(rowIndex) {
  const road = new THREE.Group();
  road.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize),
    new THREE.MeshLambertMaterial({ color: 0x454a59 }) // Dark gray for road foundation
  );

  // Add white stripes on both sides of the road
  const stripeWidth = tileSize * 0.05;
  const stripeHeight = tileSize;
  const stripeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

  // Top stripe
  const topStripe = new THREE.Mesh(
    new THREE.PlaneGeometry(tilesPerRow * tileSize, stripeWidth),
    stripeMaterial
  );
  topStripe.position.y = tileSize / 2 - stripeWidth / 2;
  topStripe.position.z = 0.01;
  foundation.add(topStripe);

  // Bottom stripe
  const bottomStripe = new THREE.Mesh(
    new THREE.PlaneGeometry(tilesPerRow * tileSize, stripeWidth),
    stripeMaterial
  );
  bottomStripe.position.y = -(tileSize / 2 - stripeWidth / 2);
  bottomStripe.position.z = 0.01;
  foundation.add(bottomStripe);

  foundation.receiveShadow = true; // Allow the road to receive shadows
  road.add(foundation);

  return road;
}
