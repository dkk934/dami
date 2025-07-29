import * as THREE from 'three';
import { tilesPerRow, tileSize } from '../constants';

export function Grass(rowIndex) {
    const grass = new THREE.Group();
    grass.position.y = rowIndex * tileSize; // Position the grass based on the row index

    const foundation = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({ color: 0x228B22, side: THREE.DoubleSide }) // Forest green
    );
    foundation.position.z = 1.5; // Position the foundation slightly below the grass
    foundation.receiveShadow = true; // Allow the grass to receive shadows
    grass.add(foundation);

    return grass;
}