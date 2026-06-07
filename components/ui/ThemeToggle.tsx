// src/components/ui/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";
import ButtonIcon from "./ButtonIcon";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === "dark";
  return (
    <Button
      className={`w-10 h-10`}
      variant={"secondary"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <ButtonIcon
            Icon={Moon}
            key={"moon"}
            initial={{ opacity: 0, rotate: -0, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        ) : (
          <ButtonIcon
            Icon={Sun}
            key="sun"
            initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </Button>
  );
}
