"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/ThemeToggle";
import NavLinks from "./NavLinks";

const mobileLinks = [
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        className="mt-5 md:mt-3 w-[90%] md:w-[43%] bg-background mx-auto rounded-xl h-16 relative border-[1.5px] border-muted-foreground dark:border-foreground/10 shadow-xl flex items-center justify-between px-4"
      >
        {/* LOGO */}
        <Link href="/">
          <Logo size={32} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <NavLinks />
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2 h-full">
          <ThemeToggle />
          <Button asChild>
            <Link href="/#contact" className="capitalize px-4 py-5">
              Get In Touch
            </Link>
          </Button>
        </div>

        {/* Mobile Right */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant={"icon"}
            size={"icon-lg"}
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className={`group`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <X
                    size={18}
                    strokeWidth={1.5}
                    className="stroke-foreground"
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Menu
                    size={18}
                    strokeWidth={1.5}
                    className="stroke-foreground group-hover:stroke-background"
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden fixed top-24 left-[5%] right-[5%] z-50 bg-background border-[1.5px] border-foreground/10 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center h-12 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors duration-300 capitalize"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: mobileLinks.length * 0.06, duration: 0.2 }}
                className="mt-2 pt-3 border-t border-foreground/10"
              >
                <Button asChild className="w-full">
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="capitalize"
                  >
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
