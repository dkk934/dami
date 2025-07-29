import * as THREE from 'three';

export function Render() {
    const container = document.querySelector("canvas.game")
    if (!container) throw new Error("Canvas element not found");

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: container, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Enable shadow maps

    return renderer;
}

// Export the renderer for use in other modules
