import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";

export function Albums() {
  const { darkMode } = useContext(ThemeContext);

  const data = [
    { imgelink: "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg" },
    { imgelink: "https://images.pexels.com/photos/2127732/pexels-photo-2127732.jpeg" },
    { imgelink: "https://images.pexels.com/photos/3536276/pexels-photo-3536276.jpeg" },
    { imgelink: "https://images.pexels.com/photos/25637467/pexels-photo-25637467.jpeg" },
    { imgelink: "https://images.pexels.com/photos/12061174/pexels-photo-12061174.jpeg" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevImage = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 200 : -200, opacity: 0 }),
  };

  return (
    <div
      className={`w-full h-full px-4 py-50 md:w-full sm:w-full flex flex-col gap-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Main Image */}
      <div className="relative w-full max-w-4xl mx-auto h-72 sm:h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence custom={direction}>
          <motion.img
            key={activeIndex}
            src={data[activeIndex].imgelink}
            alt="Gallery main"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45 }}
            className="absolute object-cover w-full h-full"
          />
        </AnimatePresence>

        <button
          onClick={prevImage}
          className="absolute px-3 py-3 text-white -translate-y-1/2 rounded-full left-3 top-1/2 bg-black/40 hover:bg-black/60"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute px-3 py-3 text-white -translate-y-1/2 rounded-full right-3 top-1/2 bg-black/40 hover:bg-black/60"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid max-w-4xl grid-cols-3 gap-4 mx-auto sm:grid-cols-5">
        {data.map(({ imgelink }, index) => (
          <motion.img
            key={index}
            src={imgelink}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            whileHover={{ scale: 1.06 }}
            className={`h-20 sm:h-24 w-full object-cover rounded-lg cursor-pointer border ${
              index === activeIndex
                ? "border-blue-500 shadow-lg"
                : darkMode
                ? "border-white/20"
                : "border-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
