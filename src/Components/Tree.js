import * as Three from 'three';
import { tileSize } from '../constants';

export function Tree(tileIndex, height) {
    const tree = new Three.Group();
    tree.position.x = tileIndex * tileSize; // Position the tree based on the tile index

    // Brown block (trunk)
    const trunkGeometry = new Three.BoxGeometry(15, 15, 20);
    const trunkMaterial = new Three.MeshLambertMaterial({ color: 0x4d2926, flatShading: true });
    const trunk = new Three.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.z = 10;
    tree.add(trunk);

    // Green block (leaves)
    const leavesGeometry = new Three.BoxGeometry(30, 30, height);
    const leavesMaterial = new Three.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true });
    const leaves = new Three.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.z = height / 2 + 20; // Position leaves above the trunk

    leaves.castShadow = true; // Allow the leaves to cast shadows
    leaves.receiveShadow = true; // Allow the leaves to receive shadows
    tree.add(leaves);

    return tree;
}