import * as THREE from 'three';

// Camera
// Export a Camera function that creates and returns a THREE.OrthographicCamera
export const Camera = () => {
    // Set the base size for the camera's view
    const size = 350;
    // Calculate the aspect ratio of the window
    const viewRatio = window.innerWidth / window.innerHeight;
    // Adjust the width based on the aspect ratio
    const width = viewRatio < 1 ? size : size * viewRatio;
    // Adjust the height based on the aspect ratio
    const height = viewRatio < 1 ? size / viewRatio : size;

    // Create an orthographic camera with calculated bounds and near/far planes
    const camera = new THREE.OrthographicCamera(
        width / -2, width / 2,    // left, right
        height / 2, height / -2,  // top, bottom
        100, 900                  // near, far
    );

    // Set the camera's up direction to Z axis
    camera.up.set(0, 0, 1);
    // Position the camera in 3D space
    camera.position.set(300, -300, 300);
    // Make the camera look at the origin (center of the scene)
    camera.lookAt(0, 0, 0);

    // Return the configured camera
    return camera;
};