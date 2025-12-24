import React, { useLayoutEffect, useRef, useContext } from "react";
import gsap from "gsap";
import SectionNameChips from "./Chips";
import { ThemeContext } from "./context/ThemeContext";

// MUSTANG 1969 NEWS DATA
const newsData = [
  {
    id: 1,
    category: ["Heritage", "Mustang 1969"],
    date: "28 November 2025",
    title: "A Deep Dive Into the Iconic 1969 Ford Mustang Restoration Legacy",
    image: "https://preview.redd.it/1969-building-a-boss-429-mustang-1110x1045-v0-1uzi7z57w4ce1.jpeg?width=640&crop=smart&auto=webp&s=432a7fa60f8e81db248c7989622f58c52c5d6203",
  },
  {
    id: 2,
    category: ["Events", "Enthusiasts"],
    date: "11 November 2025",
    title: "Mustang Heritage Meet 2026: Registration Now Open",
    image: "https://i.pinimg.com/736x/a8/dc/5b/a8dc5b37a48195be5add98605ae4fdaf.jpg",
  },
  {
    id: 3,
    category: ["Racing History"],
    date: "8 November 2025",
    title: "How the 1969 Mustang Boss 429 Redefined American Muscle Racing",
    image: "https://i.pinimg.com/736x/51/84/05/51840573578d6bbe0bd3b51d89b9bd96.jpg",
  },
  {
    id: 4,
    category: ["Restoration"],
    date: "6 November 2025",
    title: "Inside a Complete 1969 Mustang Fastback Rebuild",
    image: "https://i.pinimg.com/736x/d3/34/7f/d3347fd8824e34f17702c1395ace9df0.jpg",
  },
];

const NewsN = () => {
  const containerRef = useRef(null);

  // THEME CONNECTION (same as your Model component)
  const { darkMode } = useContext(ThemeContext);

  // GSAP ENTRY ANIMATION
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".news-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`
        w-full px-6 md:px-12 lg:px-90 py-20
        transition-colors duration-300
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
        <span> <SectionNameChips
        sectionName="News"
      /></span>
      {/* FEATURED ITEM */}
      <div className="w-full mb-20">
        <img
          src={newsData[0].image}
          alt={newsData[0].title}
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover mb-6 rounded-md"
        />

        <div className="flex flex-wrap gap-2 mb-2">
          {newsData[0].category.map((c, idx) => (
            <span
              key={idx}
              className={`text-xs font-semibold uppercase px-2 py-1 tracking-wider 
                ${darkMode ? "bg-gray-700" : "bg-gray-200"}
              `}
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mb-2 text-xs tracking-wide uppercase">
          {newsData[0].date}
        </p>

        <h2 className="max-w-3xl text-3xl font-bold leading-snug uppercase sm:text-4xl lg:text-5xl">
          {newsData[0].title}
        </h2>
      </div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.slice(1).map((item) => (
          <div key={item.id} className="news-item">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full mb-4 rounded-md h-60 sm:h-64 md:h-72"
            />

            <div className="flex flex-wrap gap-2 mb-2">
              {item.category.map((c, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold uppercase px-2 py-1 tracking-wider 
                    ${darkMode ? "bg-gray-700" : "bg-gray-200"}
                  `}
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="mb-2 text-xs tracking-wide uppercase">{item.date}</p>

            <h3 className="text-lg font-bold leading-snug uppercase sm:text-xl">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* <div className="flex items-center justify-center gap-6 mt-16">
        <span className={`w-12 h-[2px] ${darkMode ? "bg-white" : "bg-black"}`} />
        <span className="w-6 h-[2px] bg-gray-400" />
        <span className="w-6 h-[2px] bg-gray-400" />
        <span className="w-6 h-[2px] bg-gray-400" />
      </div> */}
    </div>
  );
};

export default NewsN;
