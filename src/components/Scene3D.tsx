"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export function Particles() {
  const count = 500;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);
  const scroll = useScroll();

  // We track mouse position manually since the canvas will be behind other elements
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 50; // closer
      const speed = 0.02 + Math.random() / 100; // faster
      const xFactor = -30 + Math.random() * 60;
      const yFactor = -30 + Math.random() * 60;
      const zFactor = -30 + Math.random() * 60;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    // Scroll-based camera journey
    const offset = scroll.offset;
    state.camera.position.z = 15 - offset * 40; // Travel forward through the scene
    state.camera.rotation.z = offset * Math.PI; // Slight roll
    
    if (light.current) {
      light.current.position.set(
        (mouse.current.x * state.viewport.width),
        (mouse.current.y * state.viewport.height),
        0
      );
    }
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t) * 1.5; // larger scale
      particle.mx += (mouse.current.x * 200 - particle.mx) * 0.02; // more responsive
      particle.my += (mouse.current.y * 200 - particle.my) * 0.02;
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={60} intensity={30} color="#3b82f6" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshPhysicalMaterial 
          color="#3b82f6" 
          emissive="#1d4ed8" 
          emissiveIntensity={0.5} 
          roughness={0.2} 
          metalness={0.8} 
        />
      </instancedMesh>
    </>
  );
}

export function Hero3DObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5} position={[4, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 256, 64]} />
      <meshPhysicalMaterial 
        color="#3b82f6"
        emissive="#1d4ed8"
        emissiveIntensity={0.2}
        transmission={0.9}
        opacity={1}
        metalness={0.2}
        roughness={0.1}
        ior={1.5}
        thickness={2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}


