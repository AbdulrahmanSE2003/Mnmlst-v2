"use client";
import { about1 } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Glimbse = () => {
  return (
    <motion.section className={`h-screen w-full my-16 p-16 space-y-8`}>
      <h3 className={`font-plus-jakarta-sans text-7xl font-bold`}>Hey!</h3>

      <div
        className={`flex flex-row-reverse justify-between px-8 p-18 h-full items-start`}
      >
        <div className={`flex flex-col justify-between w-1/2 h-full`}>
          <p className={` text-2xl font-semibold`}>
            I’m Majd, a builder based in Syria,{" "}
            <span className={`text-muted-foreground`}>
              currently working on Templyo, a platform for high-quality Framer
              templates.
            </span>
          </p>

          <p className={` text-xl `}>
            I’m a software engineer and Framer creator with a strong focus on
            building modern, scalable, and conversion-driven web experiences.
            Over the years, <br />
            <br /> I’ve created and shipped multiple SaaS products and Framer
            templates used by global customers, helping them launch faster.
          </p>
        </div>

        <span className="font-jetbrains-mono font-semibold text-xl text-muted-foreground uppercase tracking-widest">
          About me
        </span>
      </div>
    </motion.section>
  );
};

export default Glimbse;
