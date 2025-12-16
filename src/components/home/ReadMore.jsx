import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const ReadMore = () => {
  const titleRef = useRef(null);
  const linkRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(linkRef.current, {
        opacity: 0,
        x: 20,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="
      w-full 
      flex flex-col md:flex-row 
      justify-between md:items-center 
      gap-6 
      py-16 md:py-20 
      px-6 sm:px-10 md:px-16 lg:px-94
    ">
      
      {/* Title */}
      <h1
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl 
          font-bold 
          tracking-tight 
          uppercase 
          leading-tight
        "
      >
        News Mustang World
      </h1>

      <div 
        ref={linkRef} 
        className="flex items-center gap-3 hover:underline cursor-pointer group"
      ><a href="/news">
        <span className="text-base sm:text-lg font-medium uppercase">
          Read More
        </span>
        <span className="transition-transform group-hover:translate-x-1 text-xl">
          →
        </span>
        </a>
      </div>
    </div>
  );
};

export default ReadMore;
