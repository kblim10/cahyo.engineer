"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export function CameraController() {
  const scroll = useScroll();

  useFrame((state) => {
    // Scroll-based camera journey.
    // Offset goes from 0 to 1.
    const offset = scroll.offset;
    
    // Move the camera slightly forward, but not so far that we pass the stars.
    // Stars are centered around 0 with a radius of 50. 
    // We start at z = 15 and move to z = 5.
    state.camera.position.z = 15 - offset * 10; 
    
    // Slight rotation for the warp effect without breaking the view
    state.camera.rotation.z = offset * (Math.PI / 4);
  });

  return null;
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


