"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile } from "@/lib/data";

const REPEL_RADIUS = 260;
const MAX_PUSH = 70;
const MAX_TILT = 14;

export default function IDCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const pushX = useMotionValue(0);
  const pushY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 14, mass: 0.6 };
  const springX = useSpring(pushX, springConfig);
  const springY = useSpring(pushY, springConfig);
  const springTiltX = useSpring(tiltX, { ...springConfig, stiffness: 90 });
  const springTiltY = useSpring(tiltY, { ...springConfig, stiffness: 90 });

  const sheenX = useTransform(springTiltY, [-MAX_TILT, MAX_TILT], [0, 100]);
  const sheenY = useTransform(springTiltX, [-MAX_TILT, MAX_TILT], [100, 0]);
  const sheenBackground = useTransform(
    [sheenX, sheenY],
    ([sx, sy]: number[]) =>
      `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.55), rgba(255,255,255,0) 55%)`
  );

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      const el = cardRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPEL_RADIUS) {
        const force = 1 - dist / REPEL_RADIUS;
        const angle = Math.atan2(dy, dx);

        pushX.set(-Math.cos(angle) * force * MAX_PUSH);
        pushY.set(-Math.sin(angle) * force * MAX_PUSH);

        tiltY.set((dx / REPEL_RADIUS) * MAX_TILT);
        tiltX.set(-(dy / REPEL_RADIUS) * MAX_TILT);
      } else {
        pushX.set(0);
        pushY.set(0);
        tiltX.set(0);
        tiltY.set(0);
      }
    }

    function handlePointerLeave() {
      pushX.set(0);
      pushY.set(0);
      tiltX.set(0);
      tiltY.set(0);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [pushX, pushY, tiltX, tiltY]);

  return (
    <div
      className="flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        className="relative w-[300px] sm:w-[340px] aspect-[1.586/1] select-none"
        style={{
          x: springX,
          y: springY,
          rotateX: springTiltX,
          rotateY: springTiltY,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="relative h-full w-full rounded-2xl border border-neutral-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* sheen */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: sheenBackground }}
          />

          {/* lanyard hole */}
          <div className="absolute left-1/2 top-4 h-2.5 w-10 -translate-x-1/2 rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200" />

          <div className="flex h-full w-full flex-col justify-between px-7 pb-6 pt-11">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                ID
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
                {profile.name}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-500">
                {profile.title}
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div className="h-6 w-9 rounded-[3px] bg-gradient-to-br from-neutral-300 to-neutral-400" />
              <div className="flex gap-1">
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
