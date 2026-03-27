"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  scrambleSpeed?: number;
}

export default function TextScramble({
  text,
  className = "",
  delay = 0,
  speed = 40,
  scrambleSpeed = 3,
}: TextScrambleProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const frameRef = useRef(0);
  const queueRef = useRef<
    { from: string; to: string; start: number; end: number; char?: string }[]
  >([]);

  const randomChar = useCallback(() => {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const oldText = "";
    const length = Math.max(oldText.length, text.length);
    const queue: typeof queueRef.current = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * speed);
      const end = start + Math.floor(Math.random() * speed * scrambleSpeed);
      queue.push({ from, to, start, end });
    }

    queueRef.current = queue;
    frameRef.current = 0;

    let animFrame: number;
    const update = () => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const item = queueRef.current[i];
        const { from, to, start, end } = item;

        if (frameRef.current >= end) {
          complete++;
          output += to;
        } else if (frameRef.current >= start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = randomChar();
          }
          output += item.char;
        } else {
          output += from;
        }
      }

      setDisplay(output);
      frameRef.current++;

      if (complete < queueRef.current.length) {
        animFrame = requestAnimationFrame(update);
      }
    };

    animFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrame);
  }, [started, text, speed, scrambleSpeed, randomChar]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      className={className}
    >
      {display}
    </motion.span>
  );
}
