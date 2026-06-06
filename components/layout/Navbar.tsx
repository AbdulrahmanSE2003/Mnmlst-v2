"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 border-b border-dark-border bg-dark-bg/80 backdrop-blur-sm dark:bg-dark-bg/80"
    >
      <Link
        href="/"
        className="text-sm font-medium tracking-widest text-dark-text uppercase hover:text-accent-teal transition-colors duration-300"
      >
        <Logo />
      </Link>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors duration-300 ${
              pathname === link.href
                ? "text-dark-text"
                : "text-dark-sub hover:text-dark-text"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 text-xs font-mono text-green-700">
          <span className="w-1.5 h-1.5 rounded-full bg-green-700 animate-pulse" />
          available
        </span>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-4 rounded-full border border-dark-muted bg-dark-muted relative transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <motion.span
              className="absolute top-0.5 w-3 h-3 rounded-full bg-dark-sub"
              animate={{ left: theme === "dark" ? "2px" : "14px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        )}
      </div>
    </motion.nav>
  );
}
