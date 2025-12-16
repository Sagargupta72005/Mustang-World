import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import SectionNameChips from "../components/Chips"; // CORRECT IMPORT

const Model = () => {
  const { darkMode } = useContext(ThemeContext);

  const sketchfabTheme = darkMode ? "dark" : "light";

  return (
    <div
      className={`
        w-full flex flex-col  justify-start items-center py-2 md:py-20 md:px-20
        transition-colors duration-300
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      <SectionNameChips 
        sectionName="Model"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 1.8, delay: 0.4 }}
        className="w-full max-w-5xl flex flex-col items-center mt-5"
      >
        <div className="w-full h-full md:h-[650px] relative">
          <iframe
            title="Ford Mustang Fastback 1967"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            className="rounded-xl w-screen h-full sm:w-full md:w-full"
            src={`https://sketchfab.com/models/8949a90f004848e9b26c16819ece43ae/embed?autospin=1&preload=1&transparent=1&ui_theme=${sketchfabTheme}`}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-3xl font-bold flex justify-center items-center mt-6"
        >
          Ford Mustang Fastback 1967
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="text-sm flex justify-center items-center mt-3 text-center px-5 max-w-3xl"
        >
          The 1967 Ford Mustang Fastback is an iconic American muscle car,
          representing the first major redesign of the original Mustang. Known
          for its aggressive fastback silhouette, performance-focused engineering,
          and powerful V8 engine options, it remains one of the most admired and
          collectible Mustangs ever built.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Model;
