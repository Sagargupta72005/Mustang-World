import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect, useContext, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const { darkMode } = useContext(ThemeContext);

  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    function resizeHandler() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const [cards, setCards] = useState(cardsData);

  // Responsive card sizing
  const { responsiveWidth, responsiveHeight } = useMemo(() => {
    const max = viewportWidth * 0.6; // 60% of screen
    const width = Math.min(cardDimensions.width, max);
    const height = Math.min(cardDimensions.height, max);
    return { responsiveWidth: width, responsiveHeight: height };
  }, [viewportWidth, cardDimensions]);

  const sendToBack = (id) => {
    setCards((prev) => {
      const arr = [...prev];
      const idx = arr.findIndex((c) => c.id === id);
      const [card] = arr.splice(idx, 1);
      arr.unshift(card);
      return arr;
    });
  };

  return (
    <div
      className={`relative flex justify-center items-center w-full h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ perspective: 800 }}
    >
      <div
        className="relative"
        style={{ width: responsiveWidth, height: responsiveHeight }}
      >
        {cards.map((card, index) => {
          const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
            >
              <motion.div
                className={`rounded-2xl overflow-hidden border-4 absolute left-0 top-0 transition-colors ${
                  darkMode ? "border-white" : "border-black"
                }`}
                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%"
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping
                }}
                style={{ width: responsiveWidth, height: responsiveHeight }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="object-cover w-full h-full pointer-events-none"
                />
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
    </div>
  );
}
