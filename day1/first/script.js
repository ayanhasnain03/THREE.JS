import * as THREE from 'three'

// Grab the canvas element from the HTML file. Make sure you have a <canvas> element with class "webgl" in your HTML.
const canvas = document.querySelector("canvas.webgl") 

// Step 1: Scene
// The scene is where you place your objects, lights, and camera. 
// It's essentially a container for everything you want to render.
const scene = new THREE.Scene()

// Step 2: Object (Mesh)
// Meshes are made up of two parts: Geometry and Material.

// Geometry: Describes the shape of the object. Here we use a BoxGeometry to create a cube.
// A cube with width, height, and depth of 1 unit each.
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Material: Defines the appearance of the object. Here we use a MeshBasicMaterial with a red color (0xff0000).
// MeshBasicMaterial is used for objects that don't react to light, so this will always appear red.
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// Mesh: Combine the geometry and material to create a mesh (the actual object that will be rendered).
const mesh = new THREE.Mesh(geometry, material)

// Add the mesh to the scene so that it can be rendered.
scene.add(mesh)


// Step 3: Camera
// The camera is the viewpoint from which we see the 3D scene. It controls the perspective of how objects are displayed.
// In this case, we use a PerspectiveCamera, which mimics a human eye: objects further away appear smaller.
const sizes = {
    width: 800,   // Width of the canvas
    height: 600   // Height of the canvas
}

// A PerspectiveCamera takes three main arguments: field of view (fov), aspect ratio, and near/far planes.
// - fov: The vertical field of view in degrees. Here it is set to 75 degrees.
// - aspect ratio: The ratio of width to height, based on the canvas size.
// - near: The near clipping plane (anything closer to the camera than this distance is not rendered).
// - far: The far clipping plane (anything farther than this distance is not rendered).
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// Position the camera slightly away from the center, along the z-axis, so that we can see the cube.
// If the camera is at position (0, 0, 0), it would be inside the cube, and we wouldn't see it.
camera.position.z = 3

// Add the camera to the scene (though this isn't strictly necessary for rendering, as the camera is used directly in rendering).
scene.add(camera)


// Step 4: Renderer
// The renderer is responsible for rendering the scene from the camera's perspective and displaying it on the canvas.
// We use the WebGLRenderer, which uses WebGL to render the scene in the browser.

const renderer = new THREE.WebGLRenderer({
    canvas: canvas  // Specify which canvas element to use for rendering.
})

// Set the size of the renderer to match the canvas dimensions.
renderer.setSize(sizes.width, sizes.height)

// Render the scene with the camera. This will display everything in the scene as viewed through the camera.
renderer.render(scene, camera)

