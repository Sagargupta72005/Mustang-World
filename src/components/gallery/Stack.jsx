import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect } from "react";

/* Utility to resolve responsive sizes */
function getResponsive(value) {
  if (typeof value === "number") return value;

  const width = window.innerWidth;
  if (width < 640) return value.base;   // mobile
  if (width < 768) return value.sm;     // small screens
  if (width < 1024) return value.md;    // tablets
  return value.lg;                      // desktop
}

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const handleDragEnd = (_, info) => {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  };

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
  cardDimensions = {
    width: { base: 320, sm: 420, md: 620, lg: 800 },
    height: { base: 220, sm: 280, md: 380, lg: 500 },
  },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}) {
  const [cards, setCards] = useState(cardsData);

  const [dimensions, setDimensions] = useState({
    width: 300,
    height: 200,
  });

  /* Recalculate on window resize */
  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: getResponsive(cardDimensions.width),
        height: getResponsive(cardDimensions.height),
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [cardDimensions]);

  const sendToBack = (id) => {
    setCards((prev) => {
      const reordered = [...prev];
      const index = reordered.findIndex((c) => c.id === id);
      const [item] = reordered.splice(index, 1);
      reordered.unshift(item);
      return reordered;
    });
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-black"
      style={{
        perspective: 800,
      }}
    >
      <div
        className="relative"
        style={{ width: dimensions.width, height: dimensions.height }}
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
                className="rounded-2xl overflow-hidden border-4 border-white"
                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                }}
                style={{
                  width: dimensions.width,
                  height: dimensions.height,
                }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
    </div>
  );
}
