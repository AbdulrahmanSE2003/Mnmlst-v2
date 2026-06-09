// ─── hero.tsx ───────────────────────────────────────────────
"use client";

import { motion, Variants } from "framer-motion";
import { star, zap } from "@/lib/constants";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 1.25 } },
};

const clipReveal: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatIn: Variants = {
  hidden: { opacity: 0, scale: 0.75, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: 2, duration: 1.0, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const Hero = () => (
  <motion.section
    className="min-h-screen mb-16 rounded-[2rem] w-full mx-auto p-4 flex items-center justify-center relative overflow-hidden"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {/* Title — clip reveal */}
    <div className="flex flex-col items-center gap-4 relative z-10 h-full">
      {["Software", "Engineer"].map((word, i) => (
        <div key={i} className="">
          <motion.span
            custom={i}
            variants={clipReveal}
            className="block text-[11rem] leading-none text-foreground font-black font-plus-jakarta-sans tracking-wider"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>

    {/* Bottom corners */}
    <motion.span
      variants={fadeUp}
      className="absolute uppercase text-3xl font-medium bottom-5 left-5 z-10"
    >
      &copy; {new Date().getFullYear()}
    </motion.span>

    <motion.span
      variants={fadeUp}
      className="absolute uppercase text-lg bottom-5 right-5 z-10"
    >
      Arting since 2023
    </motion.span>

    {/* Floating icons */}
    <motion.div variants={floatIn} className="absolute top-1/12 left-1/12 z-10">
      <Image src={star} alt="Star" width={160} height={160} priority />
    </motion.div>

    <motion.div
      variants={floatIn}
      className="absolute bottom-1/10 right-1/10 z-10"
    >
      <Image src={zap} alt="Zap" width={160} height={160} priority />
    </motion.div>
  </motion.section>
);

export default Hero;
