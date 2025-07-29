import * as THREE from "three";
import { metadata as rows } from "./Components/Map.js";
import { minTileIndex, maxTileIndex, tileSize } from "./constants.js";

const clock = new THREE.Clock();

export function animateVehicles() {
  const delta = clock.getDelta();

  rows.forEach((rowData) => {
    if (rowData.type === "car" || rowData.type === "truck") {
      const beginningofRow = (minTileIndex - 2) * tileSize;
      const endOfRow = (maxTileIndex + 2) * tileSize;

      rowData.vehicles.forEach(({ ref }) => {
        if (!ref) throw new Error("Vehicle reference is missing");

        if (rowData.direction) {
          ref.position.x =
            ref.position.x > endOfRow
              ? beginningofRow
              : ref.position.x + rowData.speed * delta;
        } else {
          ref.position.x =
            ref.position.x < beginningofRow
              ? endOfRow
              : ref.position.x - rowData.speed * delta;
        }
      });
    }
  });
}
