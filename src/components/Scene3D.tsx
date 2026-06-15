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


export function ServerNodes() {
  const leftNodes = useRef<THREE.Group>(null);
  const rightNodes = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset;
    // Move nodes up and down based on scroll
    if (leftNodes.current && rightNodes.current) {
      leftNodes.current.position.y = offset * 20;
      rightNodes.current.position.y = -offset * 20;
    }
  });

  // Create an array of node positions
  const nodePositions = [];
  for (let i = -30; i < 30; i += 4) {
    nodePositions.push(i);
  }

  return (
    <>
      <group ref={leftNodes} position={[-8, 0, 0]}>
        {/* Vertical Server Line */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 100, 8]} />
          <meshBasicMaterial color="#1e3a8a" />
        </mesh>
        {nodePositions.map((y, idx) => (
          <group key={`left-${idx}`} position={[0, y, 0]}>
            <mesh>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.5} wireframe />
            </mesh>
            <mesh position={[0.4, 0, 0]}>
              <boxGeometry args={[0.6, 0.1, 0.1]} />
              <meshBasicMaterial color="#3b82f6" />
            </mesh>
          </group>
        ))}
      </group>

      <group ref={rightNodes} position={[8, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 100, 8]} />
          <meshBasicMaterial color="#1e3a8a" />
        </mesh>
        {nodePositions.map((y, idx) => (
          <group key={`right-${idx}`} position={[0, y, 0]}>
            <mesh>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.5} wireframe />
            </mesh>
            <mesh position={[-0.4, 0, 0]}>
              <boxGeometry args={[0.6, 0.1, 0.1]} />
              <meshBasicMaterial color="#3b82f6" />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}

export function Hero3DObject() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.15;
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[4, 0, 0]} scale={1.2}>
      {/* Outer Wireframe Cube */}
      <mesh>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial 
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Inner Solid Core */}
      <mesh>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshPhysicalMaterial 
          color="#1e40af"
          emissive="#1e3a8a"
          emissiveIntensity={0.5}
          transmission={0.9}
          opacity={1}
          metalness={0.8}
          roughness={0.1}
          ior={1.5}
          thickness={2}
        />
      </mesh>
      
      {/* Orbiting Data Node */}
      <mesh position={[1.5, 1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
      <mesh position={[-1.5, -1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
    </group>
  );
}


