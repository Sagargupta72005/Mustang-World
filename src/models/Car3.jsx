import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Car3 = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 md:h-screen sm:p-8 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="sketchfab-embed-wrapper w-full max-w-4xl mx-auto">
        <iframe
          title="Ford Mustang 429 Boss"
          src="https://sketchfab.com/models/16f3f937399d462ebf00f03295d5dd7c/embed?ui_theme=dark"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Car3;
