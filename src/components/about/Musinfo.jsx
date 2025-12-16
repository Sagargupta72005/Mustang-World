import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ThemeContext } from "../../context/ThemeContext";

const Musinfo = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Flicker function (motion-graphics style)
      const flicker = (element) => {
        gsap.fromTo(
          element,
          { opacity: 1 },
          {
            opacity: () => gsap.utils.random(0.3, 0),
            duration: () => gsap.utils.random(0.02, 0.12),
            repeat: 6,
            yoyo: true,
            ease: "power2.inOut",
          }
        );
      };

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        repeat: -1,
        repeatDelay: 1.4,
        yoyo: true,
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.88,
        filter: "blur(10px)",
        duration: 1.4,
        onComplete: () => flicker(titleRef.current),  // title flicker
      })
        .to(
          titleRef.current,
          {
            filter: "blur(0px)",
            duration: 0.6,
          },
          "-=1"
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 50,
            filter: "blur(6px)",
            duration: 1.4,
            onComplete: () => flicker(textRef.current),  // text flicker
          },
          "-=0.4"
        );

      // Ambient cinematic glow pulse
      gsap.to(titleRef.current, {
        filter: "drop-shadow(0 0 14px rgba(255,255,255,0.25))",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`md:h-screen flex flex-col items-center justify-center px-6 py-10 transition-colors duration-300
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      <h1
        ref={titleRef}
        className="text-3xl md:text-6xl font-bold underline mb-4"
      >
        Mustang history
      </h1>

      <p ref={textRef} className="text-lg md:text-2xl max-w-3xl text-center">
        The term "Mustang legacy" refers to the iconic history and cultural impact of the Ford Mustang, which was first introduced in 1964 and quickly became a symbol of American muscle and freedom...
      </p>
    </div>
  );
};

export default Musinfo;
