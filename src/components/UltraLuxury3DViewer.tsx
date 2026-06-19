import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface Luxury3DViewerProps {
  propertyName: string
}

export default function UltraLuxury3DViewer({ propertyName }: Luxury3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const sceneRef = useRef<THREE.Scene | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0e27)
    scene.fog = new THREE.Fog(0x0a0e27, 100, 500)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(8, 6, 8)
    camera.lookAt(0, 3, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mountRef.current.appendChild(renderer.domElement)

    // ========== ULTRA LUXURY HIGHRISE BUILDING ==========

    // Main building structure (Modern USA Style)
    const buildingGroup = new THREE.Group()
    scene.add(buildingGroup)

    // Main tower - sleek glass tower
    const towerGeometry = new THREE.BoxGeometry(3, 10, 2)
    const towerMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a4d7a,
      emissive: 0x0d2a47,
      shininess: 150,
      metalness: 0.8,
      map: createGlassTexture(),
    })
    const mainTower = new THREE.Mesh(towerGeometry, towerMaterial)
    mainTower.position.set(0, 5, 0)
    mainTower.castShadow = true
    mainTower.receiveShadow = true
    buildingGroup.add(mainTower)

    // Windows pattern on main tower
    for (let floor = 0; floor < 10; floor++) {
      for (let col = 0; col < 6; col++) {
        const windowGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.05)
        const windowMaterial = new THREE.MeshPhongMaterial({
          color: new THREE.Color().setHSL(0.6, 0.8, 0.7),
          emissive: 0xffff00,
          emissiveIntensity: 0.3,
        })
        const window = new THREE.Mesh(windowGeometry, windowMaterial)
        window.position.set(
          col * 0.5 - 1.25,
          floor * 0.95 + 0.5,
          1.05
        )
        window.castShadow = true
        buildingGroup.add(window)
      }
    }

    // Side luxury wing - curved glass
    const wingGeometry = new THREE.BoxGeometry(2, 8, 1.5)
    const wingMaterial = new THREE.MeshPhongMaterial({
      color: 0x2a6ba6,
      shininess: 130,
    })
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial)
    leftWing.position.set(-3, 4, -1.5)
    leftWing.rotation.z = 0.2
    leftWing.castShadow = true
    leftWing.receiveShadow = true
    buildingGroup.add(leftWing)

    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial)
    rightWing.position.set(3, 4, -1.5)
    rightWing.rotation.z = -0.2
    rightWing.castShadow = true
    rightWing.receiveShadow = true
    buildingGroup.add(rightWing)

    // Rooftop luxury feature
    const rooftopGeometry = new THREE.ConeGeometry(2, 1, 32)
    const rooftopMaterial = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      shininess: 200,
    })
    const rooftop = new THREE.Mesh(rooftopGeometry, rooftopMaterial)
    rooftop.position.y = 10.5
    rooftop.castShadow = true
    buildingGroup.add(rooftop)

    // Helipad circle on top
    const helipadGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32)
    const helipadMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      emissive: 0x00aa00,
    })
    const helipad = new THREE.Mesh(helipadGeometry, helipadMaterial)
    helipad.position.y = 11
    helipad.castShadow = true
    buildingGroup.add(helipad)

    // ========== SPIRITUAL & GREEN ENVIRONMENT ==========

    // Temple structure on ground
    const templeGeometry = new THREE.ConeGeometry(1.2, 2, 8)
    const templeMaterial = new THREE.MeshPhongMaterial({
      color: 0xd4a574,
      emissive: 0x8b6914,
    })
    const temple = new THREE.Mesh(templeGeometry, templeMaterial)
    temple.position.set(-5, 1, 3)
    temple.castShadow = true
    buildingGroup.add(temple)

    // Temple spire
    const spireGeometry = new THREE.ConeGeometry(0.3, 1.5, 8)
    const spireMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 })
    const spire = new THREE.Mesh(spireGeometry, spireMaterial)
    spire.position.set(-5, 3.5, 3)
    spire.castShadow = true
    buildingGroup.add(spire)

    // Sacred pond / Water feature
    const pondGeometry = new THREE.CylinderGeometry(3, 3, 0.2, 32)
    const pondMaterial = new THREE.MeshPhongMaterial({
      color: 0x1e90ff,
      transparent: true,
      opacity: 0.7,
      shininess: 100,
    })
    const pond = new THREE.Mesh(pondGeometry, pondMaterial)
    pond.position.set(6, 0.1, -3)
    pond.castShadow = true
    pond.receiveShadow = true
    buildingGroup.add(pond)

    // Water ripple effect
    const waterPlaneGeometry = new THREE.CircleGeometry(3.2, 32)
    const waterPlaneMaterial = new THREE.MeshPhongMaterial({
      color: 0x4da6ff,
      transparent: true,
      opacity: 0.3,
    })
    const waterPlane = new THREE.Mesh(waterPlaneGeometry, waterPlaneMaterial)
    waterPlane.position.set(6, 0.12, -3)
    waterPlane.rotation.x = -Math.PI / 2
    buildingGroup.add(waterPlane)

    // Green gardens - trees
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const distance = 4
      const x = Math.cos(angle) * distance - 2
      const z = Math.sin(angle) * distance + 2

      // Tree trunk
      const trunkGeometry = new THREE.CylinderGeometry(0.15, 0.2, 1.5, 8)
      const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 })
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial)
      trunk.position.set(x, 0.75, z)
      trunk.castShadow = true
      trunk.receiveShadow = true
      buildingGroup.add(trunk)

      // Tree foliage
      const foliageGeometry = new THREE.SphereGeometry(0.8, 8, 8)
      const foliageMaterial = new THREE.MeshPhongMaterial({
        color: 0x2d5016,
        emissive: 0x1a3009,
      })
      const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial)
      foliage.position.set(x, 2, z)
      foliage.castShadow = true
      buildingGroup.add(foliage)
    }

    // Decorative lotus flowers
    for (let i = 0; i < 5; i++) {
      const lotusX = Math.random() * 4 + 4
      const lotusZ = Math.random() * 4 - 5
      const petalGeometry = new THREE.SphereGeometry(0.15, 8, 8)
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xff69b4 + Math.random() * 0x00ff00),
      })
      for (let p = 0; p < 5; p++) {
        const petal = new THREE.Mesh(petalGeometry, petalMaterial)
        petal.position.set(
          lotusX + Math.cos((p / 5) * Math.PI * 2) * 0.3,
          0.3,
          lotusZ + Math.sin((p / 5) * Math.PI * 2) * 0.3
        )
        buildingGroup.add(petal)
      }
    }

    // Clean environment - green lawn
    const lawnGeometry = new THREE.PlaneGeometry(30, 30)
    const lawnMaterial = new THREE.MeshPhongMaterial({
      color: 0x2d5016,
      emissive: 0x1a3009,
    })
    const lawn = new THREE.Mesh(lawnGeometry, lawnMaterial)
    lawn.rotation.x = -Math.PI / 2
    lawn.receiveShadow = true
    buildingGroup.add(lawn)

    // ========== LIGHTING ==========

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Main directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
    directionalLight.position.set(15, 20, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.left = -20
    directionalLight.shadow.camera.right = 20
    directionalLight.shadow.camera.top = 20
    directionalLight.shadow.camera.bottom = -20
    scene.add(directionalLight)

    // Luxury accent light (gold)
    const luxuryLight = new THREE.PointLight(0xffd700, 1, 50)
    luxuryLight.position.set(0, 11, 5)
    scene.add(luxuryLight)

    // Spiritual light (blue)
    const spiritualLight = new THREE.PointLight(0x4da6ff, 0.8, 40)
    spiritualLight.position.set(6, 2, -3)
    scene.add(spiritualLight)

    // Green environment light
    const greenLight = new THREE.PointLight(0x00ff00, 0.5, 30)
    greenLight.position.set(-5, 3, 5)
    scene.add(greenLight)

    // Animation
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Smooth rotation
      buildingGroup.rotation.y += 0.002

      // Gentle building sway
      buildingGroup.position.y = Math.sin(Date.now() * 0.0003) * 0.1

      // Water ripple animation
      waterPlane.scale.x = 1 + Math.sin(Date.now() * 0.003) * 0.1
      waterPlane.scale.y = 1 + Math.sin(Date.now() * 0.003) * 0.1

      // Lotus glow animation
      const glowIntensity = Math.sin(Date.now() * 0.002) * 0.3 + 0.7
      helipad.material.emissiveIntensity = glowIntensity

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="w-full h-full rounded-2xl overflow-hidden border-2 border-brajone-gold/50 shadow-2xl shadow-brajone-gold/30"
      style={{ minHeight: '600px' }}
    />
  )
}

function createGlassTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#1a4d7a'
  ctx.fillRect(0, 0, 512, 512)

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.lineWidth = 2

  for (let i = 0; i < 16; i++) {
    ctx.beginPath()
    ctx.moveTo(i * 32, 0)
    ctx.lineTo(i * 32, 512)
    ctx.stroke()
  }

  for (let i = 0; i < 16; i++) {
    ctx.beginPath()
    ctx.moveTo(0, i * 32)
    ctx.lineTo(512, i * 32)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}
