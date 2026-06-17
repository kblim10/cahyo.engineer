"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { CameraController } from "@/components/Scene3D";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background relative">
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <color attach="background" args={["#09090b"]} />
          <ambientLight intensity={0.5} />
          <CameraController />
          <Stars radius={50} depth={50} count={6000} factor={6} saturation={0.5} fade speed={2} />
        </Canvas>
      </div>

      {/* HTML Content - Native Scroll */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
