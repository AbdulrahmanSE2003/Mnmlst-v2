"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const variants: Variants = {
  initial: { clipPath: "inset(0 0 100% 0)" },
  animate: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "inset(100% 0 0% 0)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

const curtainVariants: Variants = {
  initial: { scaleY: 0, originY: 0 },
  animate: {
    scaleY: [0, 1, 1, 0],
    originY: ["0%", "0%", "100%", "100%"],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.6, 1],
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="fixed inset-0 z-50 bg-dark-bg pointer-events-none"
          variants={curtainVariants}
          initial="initial"
          animate="animate"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
