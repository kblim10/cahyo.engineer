"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Stars } from "@react-three/drei";
import { CameraController, Hero3DObject, ServerNodes } from "@/components/Scene3D";

export default function Home() {
  return (
    <main className="w-full h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <color attach="background" args={["#09090b"]} />
          <ambientLight intensity={0.5} />
          
          {/* We use ScrollControls to dictate the page height (e.g. 7 pages long) */}
          <ScrollControls pages={6.5} damping={0.2} distance={1.2}>
            
            {/* 3D background elements that scroll or react to scroll */}
            <Scroll>
              <CameraController />
              <Stars radius={50} depth={50} count={6000} factor={6} saturation={0.5} fade speed={2} />
              <ServerNodes />
              {/* We place the Hero3DObject so it stays at the top of the scene */}
              <Hero3DObject />
            </Scroll>

            {/* HTML Overlay */}
            <Scroll html style={{ width: "100%" }}>
              <div className="relative pointer-events-none">
                {/* We use pointer-events-none on the wrapper, and auto on sections so background can be clicked if needed */}
                <div className="pointer-events-auto"><Hero /></div>
                <div className="pointer-events-auto"><About /></div>
                <div className="pointer-events-auto"><Skills /></div>
                <div className="pointer-events-auto"><Experience /></div>
                <div className="pointer-events-auto"><Projects /></div>
                <div className="pointer-events-auto"><Contact /></div>
                <div className="pointer-events-auto"><Footer /></div>
              </div>
            </Scroll>

          </ScrollControls>
        </Canvas>
      </div>
    </main>
  );
}
