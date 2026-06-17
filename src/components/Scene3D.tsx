"use client";

import { useFrame } from "@react-three/fiber";

export function CameraController() {
  useFrame((state) => {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const offset = maxScroll > 0 ? scrollY / maxScroll : 0;
      
      // Move the camera slightly forward based on scroll
      state.camera.position.z = 15 - offset * 10; 
      // Slight rotation for the warp effect
      state.camera.rotation.z = offset * (Math.PI / 4);
    }
  });

  return null;
}


