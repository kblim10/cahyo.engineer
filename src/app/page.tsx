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
import { Stars } from "@react-three/drei";
import { CameraController } from "@/components/Scene3D";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <color attach="background" args={["#09090b"]} />
          <ambientLight intensity={0.5} />
          
          {/* 3D background elements that react to native scroll */}
          <CameraController />
          <Stars radius={50} depth={50} count={6000} factor={6} saturation={0.5} fade speed={2} />
        </Canvas>
      </div>

      {/* HTML Overlay with native scroll */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
