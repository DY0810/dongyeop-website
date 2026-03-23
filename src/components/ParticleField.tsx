"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SpacetimeGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const smoothMouse = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const time = clock.elapsedTime;
    const positions = meshRef.current.geometry.attributes
      .position as THREE.BufferAttribute;

    // Smooth mouse interpolation
    smoothMouse.current.x += (pointer.x * 7 - smoothMouse.current.x) * 0.04;
    smoothMouse.current.y += (pointer.y * 7 - smoothMouse.current.y) * 0.04;

    const mx = smoothMouse.current.x;
    const my = smoothMouse.current.y;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      // Distance from cursor point
      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Gravitational well deformation
      const well = -2.2 * Math.exp(-(dist * dist) / 3.5);

      // Ambient spacetime ripples
      const wave1 =
        0.08 * Math.sin(x * 0.3 + time * 0.4) * Math.cos(y * 0.3 + time * 0.3);
      const wave2 =
        0.04 *
        Math.sin(x * 0.7 - time * 0.2) *
        Math.sin(y * 0.5 + time * 0.25);

      positions.setZ(i, well + wave1 + wave2);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.6, 0, 0]}
      position={[0, -1.5, 0]}
    >
      <planeGeometry args={[22, 22, 55, 55]} />
      <meshBasicMaterial wireframe color="#e8964b" transparent opacity={0.06} />
    </mesh>
  );
}

function Stars({ count = 500 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [posAttr, colAttr] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 28;
      pos[i3 + 1] = (Math.random() - 0.5) * 28;
      pos[i3 + 2] = (Math.random() - 0.5) * 20;

      const t = Math.random();
      if (t > 0.75) {
        // Warm amber
        col[i3] = 0.91;
        col[i3 + 1] = 0.59;
        col[i3 + 2] = 0.29;
      } else if (t > 0.5) {
        // Pale blue
        col[i3] = 0.75;
        col[i3 + 1] = 0.85;
        col[i3 + 2] = 1.0;
      } else {
        // Warm white
        col[i3] = 0.9 + Math.random() * 0.1;
        col[i3 + 1] = 0.88 + Math.random() * 0.1;
        col[i3 + 2] = 0.82 + Math.random() * 0.1;
      }
    }

    return [
      new THREE.BufferAttribute(pos, 3),
      new THREE.BufferAttribute(col, 3),
    ];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.006;
    pointsRef.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.03) * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={posAttr} />
        <primitive attach="attributes-color" object={colAttr} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowOrb() {
  const ref = useRef<THREE.Mesh>(null);
  const smoothPos = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;

    smoothPos.current.x += (pointer.x * 3.5 - smoothPos.current.x) * 0.025;
    smoothPos.current.y +=
      (pointer.y * 2.5 + 0.5 - smoothPos.current.y) * 0.025;

    ref.current.position.x = smoothPos.current.x;
    ref.current.position.y = smoothPos.current.y;

    const pulse = 0.3 + Math.sin(clock.elapsedTime * 1.5) * 0.06;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="#e8964b" transparent opacity={0.06} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 4, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#07070a"]} />
        <fog attach="fog" args={["#07070a", 10, 25]} />
        <ambientLight intensity={0.03} />
        <pointLight
          position={[0, 5, 5]}
          color="#e8964b"
          intensity={0.3}
          distance={20}
        />
        <SpacetimeGrid />
        <Stars />
        <GlowOrb />
      </Canvas>
    </div>
  );
}
