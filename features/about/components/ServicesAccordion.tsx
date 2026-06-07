"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: number;
  title: string;
  features: string[];
}
const services = [
  {
    id: 1,
    title: "Frontend Development",
    features: [
      "Building responsive, accessible UIs with Next.js and React",
      "Component libraries with Tailwind CSS and Shadcn/ui",
      "Smooth animations and micro-interactions with Framer Motion",
      "Performance optimization — Core Web Vitals and Lighthouse 90+",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Development",
    features: [
      "REST API design and development with Node.js and Express",
      "Database modeling with MongoDB and Mongoose",
      "Authentication systems — JWT, sessions, and OAuth",
      "Server-side rendering and data fetching with Next.js App Router",
    ],
  },
  {
    id: 3,
    title: "Technical Mentoring",
    features: [
      "Code reviews focused on performance and best practices",
      "Teaching React.js, state management, and responsive design",
      "Guiding junior developers through real-world project workflows",
    ],
  },
];

export default function ServicesAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto divide-y divide-zinc-200 dark:divide-zinc-800">
      {services.map((service) => {
        const isOpen = openId === service.id;

        return (
          <div key={service.id} className="overflow-hidden">
            <button
              onClick={() => toggleAccordion(service.id)}
              className="w-full flex items-center justify-between py-6 text-left focus:outline-none group cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-200 capitalize group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                {service.id}. {service.title}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="text-zinc-500"
              >
                <svg
                  width="20"
                  height="20"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                      opacity: { duration: 0.15 },
                    },
                  }}
                >
                  <div className="pb-6 pl-4 flex flex-col gap-3.5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                      >
                        <svg
                          width="18"
                          height="18"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-teal-500/75 dark:text-teal-400/75 shrink-0 mt-0.5"
                        >
                          <path
                            d="M7 12.5l3 3 7-7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm font-light leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
