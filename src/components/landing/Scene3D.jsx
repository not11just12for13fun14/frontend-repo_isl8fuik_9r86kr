import React, { useMemo } from 'react';
import * as THREE from 'three';

const Scene3D = () => {
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      const angle = (i / 120) * Math.PI * 2;
      const radius = 2 + Math.sin(i * 0.2) * 0.6;
      arr.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, Math.sin(i * 0.1)));
    }
    return arr;
  }, []);

  const colorPrimary = new THREE.Color('#2b7fff');
  const colorAccent = new THREE.Color('#0ea5e9');

  return (
    <group>
      {points.map((p, idx) => (
        <mesh key={idx} position={p}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color={idx % 2 ? colorPrimary : colorAccent} emissive={idx % 2 ? colorPrimary : colorAccent} emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export default Scene3D;
