import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingSpheres() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002
        child.rotation.x = state.clock.elapsedTime * 0.2
        child.rotation.z = state.clock.elapsedTime * 0.1
      })
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[-4, 2, -5]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      <mesh position={[5, -1, -3]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#a78bfa"
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>
      <mesh position={[3, 3, -6]}>
        <torusGeometry args={[0.3, 0.1, 8, 16]} />
        <meshStandardMaterial
          color="#c4b5fd"
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh position={[-3, -2, -4]}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>
    </group>
  )
}

function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <FloatingParticles />
        <FloatingSpheres />
      </Canvas>
    </div>
  )
}

export default Background3D

