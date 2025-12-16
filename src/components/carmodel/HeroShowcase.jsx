import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroShowcase({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-neutral-900 flex items-center justify-center overflow-hidden"
    >
      {/* Container ensures centered content including 3D model */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </section>
  );
}
