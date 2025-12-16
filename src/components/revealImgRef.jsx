import { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SectionNameChips from "./Chips";

export default function LaserFlowBoxExample() {
  const { darkMode } = useContext(ThemeContext);

  const revealImgRef = useRef(null);
  const revealCardRef = useRef(null);

  const applyRevealMask = (x, y, el) => {
    if (!el) return;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    applyRevealMask(x, y, revealImgRef.current);
    applyRevealMask(x, y, revealCardRef.current);
  };

  const handleMouseLeave = () => {
    applyRevealMask(-9999, -9999, revealImgRef.current);
    applyRevealMask(-9999, -9999, revealCardRef.current);
  };

  const BG = darkMode ? "bg-black" : "bg-[#f3f3f3]";
  const CARD_BG = darkMode
    ? "bg-black/60 backdrop-blur-xl"
    : "bg-white/80 backdrop-blur-xl";
  const IMG_BLEND = darkMode ? "mix-blend-screen" : "mix-blend-multiply";

  const revealMaskStyle = {
    "--mx": "-9999px",
    "--my": "-9999px",
    WebkitMaskImage:
      "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 80px, rgba(255,255,255,0.6) 170px, rgba(255,255,255,0.2) 260px, rgba(255,255,255,0) 350px)",
    maskImage:
      "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 80px, rgba(255,255,255,0.6) 170px, rgba(255,255,255,0.2) 260px, rgba(255,255,255,0) 350px)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };

  return (
    <div
      className={`relative cursor-grab overflow-hidden h-[900px] w-full ${BG} transition-colors duration-500`}
    >
      <div className=" ${BG}">
        <SectionNameChips sectionName="Hover This Section" />
      </div>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={revealCardRef}
        style={revealMaskStyle}
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-full md:w-full h-screen rounded-2xl
          flex items-center justify-center
          backdrop-blur-xl shadow-2xl bg-black 
         transition-all duration-300 
          ${CARD_BG}
        `}
      >
        <img
        ref={revealImgRef}
        src="https://images.pexels.com/photos/14801986/pexels-photo-14801986.jpeg"
        alt="Reveal Effect"
        style={revealMaskStyle}
        className={`border-2 border-black-700
          absolute inset-0 p-50 w-full  h-full object-cover 
          pointer-events-none opacity-95
          ${IMG_BLEND}
        `}
      />
      </div>

      
    </div>
  );
}
