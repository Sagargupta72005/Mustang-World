import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext"; // update path as needed

const SectionNameChips = ({ sectionName, names = [] }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full flex flex-col items-center space-y-3">
      <h1
        className={`text-3xl font-bold rounded-full px-8 py-4 m-10 text-center border
        transition-all duration-300
        ${darkMode ? "text-white border-white/40" : "text-black border-black/40"}
        `}
      >
        {sectionName}
      </h1>
    </div>
  );
};

export default SectionNameChips;
