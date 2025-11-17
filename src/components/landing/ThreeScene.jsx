import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'

function Floating({ children, speed = 0.6, amplitude = 0.4 }) {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 6, 4]} intensity={1.2} color={'#ffffff'} />
      {children}
    </group>
  )
}

function Nodes() {
  const positions = useMemo(
    () => [
      [-2.2, 0.6, -1.5],
      [2.4, -0.4, -1.2],
      [0.2, 1.2, 0.6],
      [-1.1, -1.2, 0.8],
      [1.6, 0.6, -0.5],
    ],
    []
  )

  return (
    <group>
      {positions.map((p, i) => (
        <mesh key={i} position={p} castShadow receiveShadow>
          <sphereGeometry args={[0.35 + (i % 3) * 0.1, 32, 32]} />
          {/* Using theme via currentColor trick and tailwind text class on canvas wrapper */}
          <meshStandardMaterial emissiveIntensity={1.2} color={'currentColor'} emissive={'currentColor'} roughness={0.3} metalness={0.2} />
        </mesh>
      ))}

      <mesh position={[0, -0.2, -0.6]} rotation={[Math.PI / 6, Math.PI / 6, 0]} castShadow receiveShadow>
        <torusKnotGeometry args={[0.6, 0.18, 120, 16]} />
        <meshStandardMaterial emissiveIntensity={0.9} color={'currentColor'} emissive={'currentColor'} roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="hidden md:block absolute inset-0 text-theme-primary/90">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 50 }}>
        <Suspense fallback={null}>
          <Floating>
            <Nodes />
          </Floating>
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
    </div>
  )
}
