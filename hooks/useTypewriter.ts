import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  startDelay?: number;
}

export function useTypewriter({
  lines,
  speed = 35,
  lineDelay = 200,
  startDelay = 600,
}: UseTypewriterOptions) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }

    if (currentLine === 0 && currentChar === 0) {
      const timeout = setTimeout(() => {
        setDisplayedLines([""]);
        setCurrentChar(1);
      }, startDelay);
      return () => clearTimeout(timeout);
    }

    if (currentChar <= lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = lines[currentLine].slice(0, currentChar);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (currentLine < lines.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, lineDelay);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [currentLine, currentChar, lines, speed, lineDelay, startDelay]);

  return { displayedLines, done };
}
