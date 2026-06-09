import { motion } from "framer-motion";
import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-plus-jakarta-sans text-5xl font-bold tracking-tight"
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
