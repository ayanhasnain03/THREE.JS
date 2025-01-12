import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */

const group = new THREE.Group()

group.rotation.y = 2
group.position.y = 1

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new  THREE.MeshBasicMaterial({color:"cyan"})
)

group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new  THREE.MeshBasicMaterial({color:"coral"})
)

cube2.position.x = -2

group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"white"})
)
group.add(cube3)
cube3.position.x = 2


const axisHelper = new THREE.AxesHelper()
scene.add(axisHelper)

//scale

// mesh.scale.y = 0.2
// mesh.scale.x = 1
// mesh.scale.z = 1

// mesh.scale.set(1,0.2,1)


//🔥rotaion

//Half rotation
// mesh.rotation.reorder("YXZ")
//  mesh.rotation.y =4
//  mesh.rotation.x = -10


/**
 * Sizes
 */

const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)