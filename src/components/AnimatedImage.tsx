"use client";

import { motion } from "framer-motion";

type Props = {
  src: string;
  className: string;
  initial?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
};

const AnimatedImage = ({
  src,
  className,
  initial,
  whileInView,
  transition,
  viewport,
}: Props) => {
  const defaultInitial = { x: -200, opacity: 0 };
  const defaultWhileInView = { x: 0, opacity: 1 };
  const defaultTransition = { duration: 1.2 };
  const defaultViewport = { once: false };

  return (
    <motion.img
      initial={initial || defaultInitial}
      whileInView={whileInView || defaultWhileInView}
      transition={transition || defaultTransition}
      viewport={viewport || defaultViewport}
      src={src}
      className={className}
    />
  );
};

export default AnimatedImage;
