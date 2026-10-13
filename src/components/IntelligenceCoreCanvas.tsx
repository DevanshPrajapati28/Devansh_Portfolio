"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Procedural Particle Core
function ParticleCore({ mousePos, scrollY }: { mousePos: React.MutableRefObject<{ x: number; y: number }>; scrollY: React.MutableRefObject<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const ringsGroupRef = useRef<THREE.Group>(null);
  const node1Ref = useRef<THREE.Mesh>(null);
  const node2Ref = useRef<THREE.Mesh>(null);

  // Check if mobile for particle count
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particleCount = isMobile ? 3200 : 9600;

  // Base spherical positions and original vectors
  const [positions, originalPositions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const orig = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const scl = new Float32Array(particleCount);

    const baseRadius = 2.35;
    const colorCyan = new THREE.Color("#38bdf8");
    const colorPurple = new THREE.Color("#818cf8");
    const colorWhite = new THREE.Color("#ffffff");
    const colorDark = new THREE.Color("#1e1b4b");

    for (let i = 0; i < particleCount; i++) {
      // Golden ratio Fibonacci sphere distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * i;

      // Small layer variance for organic depth
      const rVariance = (Math.random() - 0.5) * 0.35;
      const r = baseRadius + rVariance;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;

      // Gradient color mapping based on elevation & depth
      const t = (y / baseRadius + 1) * 0.5;
      const mixedColor = new THREE.Color();
      if (Math.random() > 0.85) {
        mixedColor.copy(colorWhite);
      } else if (t > 0.5) {
        mixedColor.lerpColors(colorCyan, colorPurple, (t - 0.5) * 2);
      } else {
        mixedColor.lerpColors(colorDark, colorCyan, t * 2);
      }

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;

      scl[i] = Math.random() * 0.6 + 0.4;
    }

    return [pos, orig, col, scl];
  }, [particleCount]);

  // Secondary cosmic cloud
  const [ambientPos, ambientCol] = useMemo(() => {
    const count = isMobile ? 400 : 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color("#38bdf8");
    const c2 = new THREE.Color("#c084fc");

    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.cos(phi);
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      const lerped = new THREE.Color().lerpColors(c1, c2, Math.random());
      col[i * 3] = lerped.r;
      col[i * 3 + 1] = lerped.g;
      col[i * 3 + 2] = lerped.b;
    }
    return [pos, col];
  }, [isMobile]);

  // Animation frame loop
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Organic procedural deformation on the particle sphere
    if (pointsRef.current) {
      const geom = pointsRef.current.geometry;
      const posAttr = geom.attributes.position;
      const posArr = posAttr.array as Float32Array;

      const breath = 1 + Math.sin(time * 1.4) * 0.045;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // 3D Harmonic noise wave deformation
        const noise =
          Math.sin(ox * 1.6 + time * 1.3) *
          Math.cos(oy * 1.4 + time * 1.1) *
          Math.sin(oz * 1.8 + time * 0.9) * 0.16;

        const factor = breath + noise;

        posArr[i3] = ox * factor;
        posArr[i3 + 1] = oy * factor;
        posArr[i3 + 2] = oz * factor;
      }
      posAttr.needsUpdate = true;
    }

    // 2. Pulse inner core
    if (coreMeshRef.current) {
      const coreScale = 1.4 + Math.sin(time * 2.0) * 0.06;
      coreMeshRef.current.scale.set(coreScale, coreScale, coreScale);
    }

    // 3. Rotate orbital rings and traveling nodes
    if (ringsGroupRef.current) {
      ringsGroupRef.current.rotation.y = time * 0.12;
      ringsGroupRef.current.rotation.z = Math.sin(time * 0.2) * 0.15;
    }

    if (node1Ref.current) {
      const angle1 = time * 0.8;
      const r1 = 3.2;
      node1Ref.current.position.set(Math.cos(angle1) * r1, Math.sin(angle1) * r1 * 0.4, Math.sin(angle1) * r1 * 0.9);
    }

    if (node2Ref.current) {
      const angle2 = -time * 0.65 + Math.PI;
      const r2 = 3.65;
      node2Ref.current.position.set(Math.sin(angle2) * r2 * 0.85, Math.cos(angle2) * r2, Math.cos(angle2) * r2 * 0.4);
    }

    // 4. Parallax & Smooth Cursor response
    if (groupRef.current) {
      const targetRotY = mousePos.current.x * 0.45;
      const targetRotX = -mousePos.current.y * 0.35;

      // Base slow rotation + mouse tilt
      groupRef.current.rotation.y += (targetRotY + time * 0.08 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;

      // 5. Scroll connection: move backward, scale down, and transition
      const scroll = scrollY.current;
      const scrollProgress = Math.min(scroll / 800, 1);

      const targetZ = -scrollProgress * 4.2;
      const targetY = -scrollProgress * 0.4;
      const targetScale = 1.0 - scrollProgress * 0.38;

      groupRef.current.position.z += (targetZ - groupRef.current.position.z) * 0.08;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.08;
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08)
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Inner Glowing Energy Core */}
      <mesh ref={coreMeshRef}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh scale={0.95}>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Main Procedural Particle Shell */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.038 : 0.032}
          vertexColors
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* Transparent Orbital Gyroscopic Rings */}
      <group ref={ringsGroupRef}>
        {/* Ring 1 - Equator tilt */}
        <mesh rotation={[Math.PI / 3, 0.2, 0]}>
          <torusGeometry args={[3.2, 0.007, 16, 120]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Ring 2 - Polar tilt */}
        <mesh rotation={[-Math.PI / 4, 0.5, 0.3]}>
          <torusGeometry args={[3.65, 0.006, 16, 120]} />
          <meshBasicMaterial
            color="#818cf8"
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Ring 3 - Outer wide ellipse ring */}
        <mesh rotation={[0.4, -0.6, 0.8]}>
          <torusGeometry args={[4.1, 0.005, 16, 120]} />
          <meshBasicMaterial
            color="#c084fc"
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Orbiting Satellite Data Nodes */}
        <mesh ref={node1Ref}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial
            color="#ffffff"
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh ref={node2Ref}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial
            color="#38bdf8"
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Secondary Cosmic Ambient Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[ambientPos, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[ambientCol, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          vertexColors
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function IntelligenceCoreCanvas() {
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} color="#38bdf8" intensity={2.5} distance={10} />
        <pointLight position={[5, 5, 5]} color="#818cf8" intensity={1.5} />
        <pointLight position={[-5, -5, -3]} color="#38bdf8" intensity={1.0} />
        <ParticleCore mousePos={mousePos} scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
