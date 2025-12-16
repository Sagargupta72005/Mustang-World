import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Mustangpara } from "../data/Mustangpara";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  const [isMedium, setIsMedium] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMedium(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const displayedText =
    isMedium && !expanded ? Mustangpara.slice(0, 1) : Mustangpara;

  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-between 
      px-6 lg:px-24 py-10 md:min-h-screen pt-20 transition-colors duration-300
      ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      
      <motion.div
        className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-between items-center  mb-8 md:mb-0 sm:px-6"
        initial={{ opacity: 0, x: -1280 }}
        animate={{ opacity: 1, x: 10,y:5}}
        transition={{ duration: 1 }}
        
      >
        <h1 className="font-extrabold bg-linear-to-r from-yellow-300 via-yellow-400 to-red-400  md:w-full pb-5
        bg-clip-text text-transparent text-4xl flex justify-center items-center sm:text-4xl lg:text-6xl  underline decoration-red-800/70">
          Ford Mustang 1967
        </h1>

        {displayedText.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{scale: 1.1}}
            transition={{ duration: 5, delay: index * 0.1,repeat: Infinity }}
            className={`text-sm sm:text-sm text-clip font-bold leading-tight  sm:pr-4 transition-colors 
              ${darkMode ? "text-white" : "text-black"}`}
          >
            {text}
          </motion.p>
        ))}

        {isMedium && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-yellow-500 underline text-sm mt-2"
          >
            Read More
          </button>
        )}
      </motion.div>

      <motion.div
        className="text-a md:w-1/2 lg:w-1/2 flex justify-center"
        drag
        initial={{ opacity: 0, x: 1050 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 1.4 }}
      >
        <motion.img
        drag
        dragConstraints={{x:0, y:0}}
        dragElastic={0.5}
        dragMomentum={false}
        whileHover={{scale: 1.1}}
          src="https://media.gettyimages.com/id/1475841990/photo/model-ford-mustang-gt-cobra.jpg?s=612x612&w=0&k=20&c=di2co11f0Bjh-fXPlckS_gZslq-_rzPTmBYRk74xZSs="
          alt="Mustang"
          className="w-full max-w-xs sm:max-w-md lg:max-w-xl rounded-2xl shadow-xl transition-colors"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
