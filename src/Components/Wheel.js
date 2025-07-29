import * as THREE from "three";

export function Wheel(positionX, type) {
    let wheel;

    if (type === "truck") {
        // Truck wheel: larger size
        wheel = new THREE.Mesh(
            new THREE.BoxGeometry(10, 40, 15),
            new THREE.MeshLambertMaterial({ color: "black", flatShading: true })
        );
        wheel.position.x = positionX;
    wheel.position.y = 0.01; // Higher position for truck wheels
    } else {
        // Default wheel: smaller size
        wheel = new THREE.Mesh(
            new THREE.BoxGeometry(10, 20, 15),
            new THREE.MeshLambertMaterial({ color: 0x000000, flatShading: true })
        );
        wheel.position.x = positionX;
    wheel.position.y = 6;
    }
    

    return wheel;
}