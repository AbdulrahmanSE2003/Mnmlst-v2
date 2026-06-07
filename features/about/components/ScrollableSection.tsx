"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { about1, about2, about3, about4 } from "@/lib/constants";
import ExperienceSection from "@/features/about/components/ExperienceSection";
import AboutHero from "@/features/about/components/AboutHero";
import ServicesSection from "@/features/about/components/ServicesSection";
import StackSection from "@/features/about/components/StackSection";

const sections = [
  {
    id: "intro",
    image: about1, // Personal Pic
    content: <AboutHero />,
  },
  {
    id: "service",
    image: about2,
    content: <ServicesSection />,
  },
  {
    id: "experience",
    image: about3,
    content: <ExperienceSection />,
  },
  {
    id: "stack",
    image: about4,
    content: <StackSection />,
  },
];
function Section({
  section,
  onInView,
}: {
  section: (typeof sections)[0];
  onInView: (id: string) => void;
}) {
  const ref = useRef(null);

  // Adjusted to trigger exactly when half the section is visible
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) onInView(section.id);
  }, [inView, section.id, onInView]);

  return (
    <div ref={ref} className="min-h-screen flex items-center py-24">
      {section.content}
    </div>
  );
}

export default function ScrollableSection() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [direction, setDirection] = useState(1);

  // Use a ref to track the current active ID without causing re-renders in the callback
  const currentIdRef = useRef(sections[0].id);

  const activeSection = sections.find((s) => s?.id === activeId)!;

  // useCallback prevents the function from being recreated on every render
  const handleInView = useCallback((id: string) => {
    if (currentIdRef.current === id) return;

    const currentIndex = sections.findIndex(
      (s) => s.id === currentIdRef.current,
    );
    const newIndex = sections.findIndex((s) => s.id === id);

    if (newIndex !== -1) {
      setDirection(newIndex > currentIndex ? 1 : -1);
      setActiveId(id);
      currentIdRef.current = id;
    }
  }, []); // Empty dependency array keeps the function reference stable

  return (
    <section className="">
      <div className="flex gap-8 items-start">
        {/* Left — scrollable content */}
        <div className="w-full lg:w-1/2 flex flex-col ps-3">
          {sections.map((section) => (
            <Section
              key={section.id}
              section={section}
              onInView={handleInView}
            />
          ))}
        </div>

        {/* Right — sticky image */}
        <div className="max-lg:hidden w-1/2 sticky top-24 h-[calc(100vh-8rem)] flex items-center justify-center">
          <div className="relative w-80 h-120 rounded-3xl overflow-hidden shadow-2xl bg-zinc-900">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeId}
                initial={{ y: direction > 0 ? "100%" : "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: direction > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSection.image}
                  alt={activeSection.id}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {sections.map((s) => (
                <motion.span
                  key={s.id}
                  animate={{
                    width: s.id === activeId ? 20 : 6,
                    opacity: s.id === activeId ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full bg-white block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
