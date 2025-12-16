import React, { useRef } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CarModel({ color, size = 4 }) {
  const ref = useRef();

  const { scene, materials } = useGLTF("/car.gltf");

  // Rotate animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  // Apply color to car paint material
  if (materials) {
    const paintMat =
      materials.CarPaint ||
      materials.carpaint ||
      materials.Body ||
      materials.Paint ||
      null;

    if (paintMat) {
      paintMat.color.set(color);
      paintMat.metalness = 1;
      paintMat.roughness = 0.25;
    }
  }

  return (
    <group ref={ref} dispose={null}>
      {/* Increase scale here */}
      <primitive object={scene} scale={7} />
      <Environment preset="city" />
    </group>
  );
}
