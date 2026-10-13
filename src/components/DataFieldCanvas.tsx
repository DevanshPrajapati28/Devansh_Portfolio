"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GPUParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, colors } = useMemo(() => {
    const cols = 48;
    const rows = 48;
    const count = cols * rows;

    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const c1 = new THREE.Color("#0284c7"); // Deep Cyan / Sky 600
    const c2 = new THREE.Color("#38bdf8"); // Electric Cyan 400
    const c3 = new THREE.Color("#818cf8"); // Indigo highlight

    const spacing = 0.55;
    const offsetX = (cols * spacing) / 2;
    const offsetZ = (rows * spacing) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const idx = i * rows + j;
        const x = i * spacing - offsetX;
        const z = j * spacing - offsetZ;
        const y = 0;

        pos[idx * 3] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;

        const dist = Math.sqrt(x * x + z * z) / 16;
        const mixCol = new THREE.Color().lerpColors(c1, c2, Math.min(dist, 1));
        if (Math.random() > 0.9) mixCol.lerp(c3, 0.5);

        col[idx * 3] = mixCol.r;
        col[idx * 3 + 1] = mixCol.g;
        col[idx * 3 + 2] = mixCol.b;
      }
    }

    return { positions: pos, colors: col };
  }, []);

  // Custom vertex & fragment shaders - 100% GPU hardware accelerated
  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        uniform float uTime;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vHeight;

        void main() {
          vColor = color;
          vec3 p = position;
          
          // Pure GPU wave displacement
          float wave1 = sin(p.x * 0.35 + uTime * 1.4) * cos(p.z * 0.35 + uTime * 1.1) * 0.8;
          float wave2 = sin((p.x + p.z) * 0.25 + uTime * 1.6) * 0.4;
          p.y += wave1 + wave2;
          vHeight = p.y;

          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (14.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vHeight;

        void main() {
          // Circular particle shape
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.1, dist) * 0.85;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef} position={[0, -1.2, 0]} rotation={[0.45, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        args={[shaderArgs]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function DataFieldCanvas() {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 5, 14], fov: 48 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <GPUParticleField />
      </Canvas>
    </div>
  );
}
