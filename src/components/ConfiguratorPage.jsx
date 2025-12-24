import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, Bounds, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --------------------------------------
// 3D Car Model
// --------------------------------------
function CarModel({ color }) {
  const { scene, materials } = useGLTF("/car.gltf");
  const ref = useRef();

  // Rotate intro animation
  useEffect(() => {
    gsap.fromTo(
      ref.current.rotation,
      { y: -1.2 },
      { y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  // Apply paint color
  useEffect(() => {
    const paint =
      materials.FordM_CarPaint_Max_016 ||
      materials.CarPaint ||
      materials.Paint ||
      null;

    if (paint) {
      paint.color.set(color);
      paint.metalness = 0.5;
      paint.roughness = 0.25;
    }
  }, [color, materials]);

  return <primitive ref={ref} object={scene} />;
}

// --------------------------------------
// Specs Component
// --------------------------------------
function Spec({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-sm tracking-wider uppercase text-neutral-400">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

// --------------------------------------
// Hero Section
// --------------------------------------
function HeroShowcase({ color }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="relative flex w-full h-full overflow-hidden bg-black">
      {/* Title */}
      <div className="absolute w-full px-4 text-center top-5">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
          MUSTANG GT 2015
        </h1>
      </div>

      {/* 3D Model */}
      <div
        ref={containerRef}
        className="flex items-center justify-center w-full"
        style={{ height: "20vh", minHeight: "800px" }}
      >
        <Canvas camera={{ position: [0, 1.2, 6], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.3} />
          <Bounds fit clip damping={6}>
            <CarModel color={color} />
          </Bounds>
          <Environment preset="city" />
          <OrbitControls
            enablePan={true}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
        </Canvas>
      </div>

      {/* Specs */}
      <div className="absolute flex flex-col justify-center w-full space-y-4 text-white bottom-10 md:flex-row md:space-y-0 md:space-x-10 text-8xl px-90">
        <Spec label="MOTOR" value="6.2 Liter V8" />
        <Spec label="MAX SPEED" value="300 KM/H" />
        <Spec label="0-100 KM/H" value="4.2 S" />
      </div>
    </section>
  );
}

// --------------------------------------
// Color Selector
// --------------------------------------
function ColorSelector({ colors, selected, onSelect }) {
  return (
    <div className="flex px-4 py-2 space-x-4 overflow-x-auto shadow-xl cursor-pointer bg-neutral-800 rounded-xl">
      {colors.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.color)}
          className={`shrink w-12 h-12 rounded-lg border-2 cursor-pointer transition-all ${
            selected === c.color ? "border-yellow-400 scale-110" : "border-transparent"
          }`}
          style={{ backgroundColor: c.color }}
        />
      ))}
    </div>
  );
}


// --------------------------------------
// Main Configurator Page
// --------------------------------------
function ConfiguratorPage() {
  const [selectedColor, setSelectedColor] = useState("yellow");

  const colors = [
    { id: "yellow", color: "yellow" },
    { id: "white", color: "#e5e5e5" },
    { id: "black", color: "#0d0d0d" },
    { id: "red", color: "#d10000" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-white bg-black cursor-pointer md:w-full">
      
      <HeroShowcase  color={selectedColor} />

      {/* Color Selector */}
      <div className="flex justify-center w-full max-w-3xl mt-5">
        <ColorSelector colors={colors} selected={selectedColor} onSelect={setSelectedColor} />
      </div>

    </div>
  );
}

export default ConfiguratorPage;
