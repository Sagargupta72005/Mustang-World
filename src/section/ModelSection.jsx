import React, { useRef, useEffect, useState, useContext } from "react";
import { gsap } from "gsap";
import { ThemeContext } from "../context/ThemeContext";

const models = [
  {
    id: 1,
    name: "Ford Mustang 1965 1st Generation",
    img: "https://thumbs.dreamstime.com/b/ford-mustang-st-generation-isolated-white-background-studio-shot-photo-original-classic-retro-vintage-race-car-69324760.jpg?w=992",
  },
  {
    id: 2,
    name: "FORD Mustang (2014 - 2017)",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80",
  },
  {
    id: 3,
    name: "2016 Ford Mustang Shelby GT350",
    img: "https://s1.cdn.autoevolution.com/images/models/FORD_Mustang-Shelby-GT350-2015_main.jpg",
  },
  {
    id: 4,
    name: "FORD Mustang (1969 - 1973)",
    img: "https://i.pinimg.com/736x/9e/0a/6d/9e0a6d18673590b63470f2d80883b465.jpg",
  },
];

const ModelSection = () => {
  const { darkMode } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }
    );
  }, [current]);

  const prevSlide = () => {
    setCurrent((current - 1 + models.length) % models.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % models.length);
  };

  return (
    <section
      className={`
        w-full min-h-[100vh] flex flex-col items-center justify-start 
        px-4 py-10 md:py-20 relative overflow-hidden transition-all duration-500
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      <h1 className="text-3xl md:text-6xl font-extrabold mt-10 text-center">
        BEYOND THE CONCRETE
      </h1>

      <div className="relative w-full max-w-[1200px] flex justify-center mt-14 px-4">

        {/* Left faded image */}
        <div className="hidden md:block absolute left-0 opacity-20 scale-90">
          <img
            src={models[(current - 1 + models.length) % models.length].img}
            alt=""
            className="h-56 md:h-72 object-contain select-none"
          />
        </div>

        {/* Main Image */}
        <img
          ref={imageRef}
          src={models[current].img}
          alt="car"
          className="h-56 sm:h-64 md:h-80 lg:h-96 z-20 select-none object-contain"
        />

        {/* Right faded image */}
        <div className="hidden md:block absolute right-0 opacity-20 scale-90">
          <img
            src={models[(current + 1) % models.length].img}
            alt=""
            className="h-56 md:h-72 object-contain select-none"
          />
        </div>

        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className={`
            cursor-pointer absolute left-2 sm:left-6 md:left-10 flex items-center justify-center
            top-1/2 -translate-y-1/2 
            h-50 w-10 rounded-full border text-3xl md:text-4xl transition
            ${darkMode
              ? "border-white hover:bg-white hover:text-black"
              : "border-black hover:bg-black hover:text-white"
            }
          `}
        >
          ‹
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className={`
            cursor-pointer absolute right-2 sm:right-6 md:right-10 flex items-center justify-center
            top-1/2 -translate-y-1/2 
            h-50 w-10 rounded-full border text-3xl md:text-4xl transition
            ${darkMode
              ? "border-white hover:bg-white hover:text-black"
              : "border-black hover:bg-black hover:text-white"
            }
          `}
        >
          ›
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center  gap-6 md:gap-10 mt-14 px-2">
        {models.map((m, index) => (
          <button
            key={m.id}
            onClick={() => setCurrent(index)}
            className={`
              cursor-pointer pb-2 text-sm sm:text-base md:text-lg 
              font-medium tracking-wide transition-all duration-300 border-b-2
              ${
                current === index
                  ? darkMode
                    ? "text-white border-yellow-500"
                    : "text-black border-yellow-700"
                  : darkMode
                  ? "text-gray-400 border-transparent hover:text-white"
                  : "text-gray-500 border-transparent hover:text-black"
              }
            `}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <a href="/Model" className="cursor-pointer">
          <button
            className={`
              cursor-pointer px-8 py-3 md:px-10 md:py-4 
              font-semibold tracking-wide text-sm md:text-base transition
              ${
                darkMode
                  ? "bg-yellow-500  text-black hover:bg-red-600 hover:border-red-900 border-4"
                  : "bg-yellow-500 text-white hover:bg-red-600 hover:border-red-900 border-4"
              }
            `}
          >
            EXPLORE THE MODEL →
          </button>
        </a>
      </div>
    </section>
  );
};

export default ModelSection;
