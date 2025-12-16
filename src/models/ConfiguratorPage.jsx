import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import CarModel from "./carmodel/CarModel";
import ColorSelector from "./carmodel/ColorSelector";
import HeroShowcase from "./carmodel/HeroShowcase";

export default function ConfiguratorPage() {
const [selectedColor, setSelectedColor] = useState("#00ff4c");

const colors = [
{ id: "green", color: "#00ff4c" },
{ id: "white", color: "#ffffff" },
{ id: "black", color: "#111111" },
{ id: "red", color: "#e60000" }
];

return ( <div className="bg-neutral-900 min-h-screen w-full flex flex-col items-center"> 
<HeroShowcase> <div className="relative w-full h-[80vh] md:h-[80vh] lg:h-[90vh]">
<Canvas
camera={{ position: [0, 1.2, 5], fov: 45 }}
className="w-full h-full"
> <ambientLight intensity={0.6} />
<directionalLight position={[5, 5, 5]} intensity={1.5} /> <CarModel color={selectedColor} /> </Canvas>

      <div className="absolute bottom-4 md:bottom-14 w-full flex justify-center px-4">
        <ColorSelector
          colors={colors}
          selected={selectedColor}
          onSelect={setSelectedColor}
        />
      </div>
    </div>
  </HeroShowcase>
</div>

);
}
