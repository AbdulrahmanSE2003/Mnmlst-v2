"use client";

import { projects } from "@/lib/constants";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.3, 1] },
  },
};

const ProjectCard = ({ p }: { p: (typeof projects)[0] }) => (
  <motion.div variants={cardVariants} className="group flex flex-col gap-4">
    <div className="relative h-80 rounded-2xl overflow-hidden bg-muted">
      <Image
        src={p.image}
        alt={p.title}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 rounded-2xl" />
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          href={p.repo}
          target="_blank"
          className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </Link>
        <Link
          href={p.demo}
          target="_blank"
          className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200"
        >
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
    <div className="flex items-start justify-between gap-4 px-1">
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium text-foreground">{p.title}</span>
        <span className="text-sm text-muted-foreground font-light leading-snug">
          {p.description}
        </span>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
