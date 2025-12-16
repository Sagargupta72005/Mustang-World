import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Car2 = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Car2 darkMode:", darkMode);
  }, [darkMode]);

  // Dynamic theme for Sketchfab
  const iframeUrl = darkMode
    ? "https://sketchfab.com/models/7637d82b813b4b5bafa3f821153b72c3/embed?ui_theme=dark"
    : "https://sketchfab.com/models/7637d82b813b4b5bafa3f821153b72c3/embed?ui_theme=light";

  return (
    <div
      className={`w-full min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center 
      px-5 sm:px-10 py-10 sm:py-16 gap-10 
      transition-colors duration-300
      ${darkMode ? "bg-black text-white" : "bg-white text-black"}
    `}
    >
      {/* Left: Sketchfab Model */}
      <div className="sketchfab-embed-wrapper w-full lg:w-2/3">
        <div className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[500px] xl:h-[600px]">
          <iframe
            title="Ford Mustang Fastback 1967"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={iframeUrl}
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>

        <p
          className="mt-2 text-center text-xs"
          style={{
            color: darkMode ? "#cccccc" : "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/ford-mustang-fastback-1967-7637d82b813b4b5bafa3f821153b72c3"
            target="_blank"
            rel="nofollow"
            className="font-bold"
            style={{ color: "#1CAAD9" }}
          >
            Ford Mustang Fastback 1967
          </a>{" "}
         
        </p>
      </div>

      {/* Right: Description */}
      <motion.div
        className="lg:w-1/3 w-full px-3 sm:px-0 text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
        >
          Stylized Mustang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="leading-relaxed text-sm sm:text-base"
        >
          Stylized Mustang refers to heavily customized versions of classic
          Mustangs, especially the 1967–1968 Fastback models. These cars are
          often reimagined as high-performance “restomod” builds or iconic
          reconstructions such as the famous “Eleanor” design from Gone in 60
          Seconds.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Car2;
