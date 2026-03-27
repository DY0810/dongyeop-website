"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextScramble({
  text,
  className = "",
  delay = 0,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    // Total frames for the animation
    const totalFrames = 60; // ~1 second at 60fps
    frameRef.current = 0;

    const scramble = () => {
      frameRef.current++;
      const progress = frameRef.current / totalFrames;

      // Number of characters that should be revealed
      const revealed = Math.floor(progress * text.length);

      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed) {
          result += text[i];
        } else if (text[i] === " ") {
          result += " ";
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(result);

      if (frameRef.current < totalFrames) {
        rafRef.current = requestAnimationFrame(scramble);
      } else {
        setDisplay(text);
      }
    };

    // Start with scrambled text
    let initial = "";
    for (let i = 0; i < text.length; i++) {
      initial += text[i] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    setDisplay(initial);

    rafRef.current = requestAnimationFrame(scramble);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, text]);

  return (
    <span
      className={className}
      style={{
        opacity: started ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      {display}
    </span>
  );
}
