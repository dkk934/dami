import * as THREE from "three";
import { Grass } from "./Grass.js";
import { Tree } from "./Tree.js";
import { Road } from "./Road.js";
import { Car } from "./Car.js";
import { Truck } from "./Truck.js";
import { generateRows } from "../utilities/generateRows.js";

export const metadata = [];

export const map = new THREE.Group();

export function initializeMap() {
  metadata.length = 0;
  map.remove(...map.children);

  for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
    const grass = Grass(rowIndex);
    map.add(grass);
  }
  addRows();
}

export function addRows() {
  const newMetadata = generateRows(20);
  const startIndex = metadata.length; // Get the current length of metadata
  metadata.push(...newMetadata);
  newMetadata.forEach((rowData, index) => {
    const rowIndex = startIndex + index + 1; // Center the rows

    if (rowData.type === "forest") {
      const row = Grass(rowIndex);

      rowData.trees.forEach(({ tileIndex, height }) => {
        const three = Tree(tileIndex, height);
        row.add(three);
      });
      map.add(row);
    }

    if (rowData.type === "car") {
      const row = Road(rowIndex);

      rowData.vehicles.forEach((vehicle) => {
        const car = Car(
          vehicle.initialTileIndex,
          vehicle.color,
          rowData.direction
        );
        vehicle.ref = car; // Store reference to the car in the vehicle object
        row.add(car);
      });
      map.add(row);
    }

    if (rowData.type === "truck") {
      const row = Road(rowIndex);

      rowData.vehicles.forEach((vehicle) => {
        const truck = Truck(
          rowData.type,
          vehicle.initialTileIndex,
          vehicle.color,
          rowData.direction
        );
        vehicle.ref = truck; // Store reference to the truck in the vehicle object
        row.add(truck);
      });
      map.add(row);
    }
  });
}
