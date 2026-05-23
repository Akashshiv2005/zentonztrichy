import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  scale?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  delay = 0.2,
  duration = 0.8,
  direction = "up",
  distance = 50,
  scale = 1,
  once = true,
}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isExemptPage, setIsExemptPage] = React.useState(false);

  React.useEffect(() => {
    const checkStatus = () => {
      setIsMobile(window.innerWidth < 768);
      const path = window.location.pathname;
      setIsExemptPage(path.includes("/services") || path.includes("/gallery"));
    };
    checkStatus();
    window.addEventListener("resize", checkStatus);
    return () => window.removeEventListener("resize", checkStatus);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getHiddenVariant = (): Variant => {
    // Zero-lag mode: Only opacity if mobile OR not on gallery/services page
    const isMinimalMode = isMobile || !isExemptPage;
    
    const hidden: Variant = { opacity: 0, scale: isMinimalMode ? 1 : scale };

    if (!isMinimalMode) {
      if (direction === "up") hidden.y = distance;
      else if (direction === "down") hidden.y = -distance;
      else if (direction === "left") hidden.x = distance;
      else if (direction === "right") hidden.x = -distance;
    }

    return hidden;
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic-bezier
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealList: React.FC<{
  children: React.ReactNode[];
  stagger?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}> = ({
  children,
  stagger = 0.1,
  delay = 0,
  direction = "up",
  distance = 30,
  once = true,
}) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="w-full">
      {React.Children.map(children, (child, index) => (
        <Reveal
          key={index}
          delay={delay + index * stagger}
          direction={direction}
          distance={distance}
          width="100%"
          once={once}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
};
