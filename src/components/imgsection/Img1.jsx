import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionNameChips from "../Chips";

const ReadMore = ({ text, maxLength = 120 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="text-base sm:text-lg md:text-xl text-gray-600 md:text-wrap leading-relaxed">
      {expanded ? text : text.slice(0, maxLength) + "... "}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-red-600 font-semibold"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
};

const Img1 = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 md:px-92">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-screen items-center h-auto">

        {/* Image with animation */}
        <motion.div
          className="flex justify-center order-1 md:order-none"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            className="w-full max-w-md sm:max-w-lg rounded-lg shadow-md object-cover"
            src="https://media.istockphoto.com/id/1448525877/photo/1969-ford-mustang-mach-1-fastback.jpg?s=612x612&w=0&k=20&c=FCImvWbDfpvZWJ2OTBQP1mv5gzZPpEORSjHIWIeyFNM="
            alt="1969 Ford Mustang Fastback"
          />
        </motion.div>

        {/* Text Content with animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Mustang Fastback
          </h1>

          <ReadMore
            text="The 1969 Mustang Fastback is an iconic blend of raw American muscle and timeless automotive design. Known for its aggressive stance, powerful V8 engine options, and unmistakable fastback silhouette, it remains one of the most celebrated classic cars ever built."
            maxLength={120}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Img1;
