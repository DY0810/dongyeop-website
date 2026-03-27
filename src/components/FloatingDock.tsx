"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface DockItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function DockIcon({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    if (!ref.current) return 150;
    const rect = ref.current.getBoundingClientRect();
    return val - rect.left - rect.width / 2;
  });

  const size = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const springSize = useSpring(size, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: springSize, height: springSize }}
      className="relative flex items-center justify-center rounded-xl bg-surface/80 border border-white/[0.06] backdrop-blur-md text-muted hover:text-accent transition-colors duration-200"
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            className="absolute -top-9 left-1/2 font-mono text-[11px] text-foreground bg-surface/90 border border-white/[0.08] px-2.5 py-1 rounded-md whitespace-nowrap backdrop-blur-sm"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      {item.icon}
    </motion.a>
  );
}

export default function FloatingDock({ items }: { items: DockItem[] }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 px-3 py-2 rounded-2xl bg-background/60 border border-white/[0.06] backdrop-blur-xl shadow-2xl shadow-black/40"
    >
      {items.map((item) => (
        <DockIcon key={item.label} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}
