"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  /** "full" = denso/expressivo (hero), "ambient" = mais leve (outras seções). */
  variant?: "full" | "ambient";
  className?: string;
}

interface Particle {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
}

export function InteractiveBackground({
  variant = "full",
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const accent = "182, 255, 58";
    const dot = "237, 239, 236";
    const isFull = variant === "full";
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let running = true;
    let t = 0;
    const radius = isMobile ? 110 : isFull ? 180 : 130;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const density = isMobile ? 90 : isFull ? 56 : 80;
      const cols = Math.ceil(width / density);
      const rows = Math.ceil(height / density);
      particles = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * density + (Math.random() - 0.5) * density * 0.4;
          const y = j * density + (Math.random() - 0.5) * density * 0.4;
          particles.push({
            ox: x,
            oy: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: 0.8 + Math.random() * 0.9,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const drawMesh = () => {
      // very subtle radial mesh in the corners
      const g1 = ctx.createRadialGradient(
        width * 0.85,
        height * 0.15,
        0,
        width * 0.85,
        height * 0.15,
        Math.max(width, height) * 0.6
      );
      g1.addColorStop(0, `rgba(${accent}, ${isFull ? 0.06 : 0.03})`);
      g1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(
        width * 0.1,
        height * 0.95,
        0,
        width * 0.1,
        height * 0.95,
        Math.max(width, height) * 0.5
      );
      g2.addColorStop(0, "rgba(125, 179, 39, 0.05)");
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
    };

    const step = () => {
      if (!running) {
        raf = requestAnimationFrame(step);
        return;
      }
      t += 0.005;
      ctx.clearRect(0, 0, width, height);
      drawMesh();

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const r2 = radius * radius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // ambient drift
        const drift = Math.sin(t + p.phase) * 0.6;
        const tx = p.ox + drift;
        const ty = p.oy + Math.cos(t * 0.8 + p.phase) * 0.6;

        // cursor repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        let highlight = 0;
        if (d2 < r2 && mouseRef.current.active) {
          const d = Math.sqrt(d2) || 0.0001;
          const force = (1 - d / radius) * (isFull ? 22 : 14);
          p.vx += (dx / d) * force * 0.05;
          p.vy += (dy / d) * force * 0.05;
          highlight = 1 - d / radius;
        }

        // spring back to original
        p.vx += (tx - p.x) * 0.045;
        p.vy += (ty - p.y) * 0.045;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        const baseAlpha = isFull ? 0.18 : 0.12;
        const alpha = baseAlpha + highlight * 0.65;
        const size = p.size + highlight * 1.6;

        if (highlight > 0.05) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accent}, ${highlight * 0.18})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle =
          highlight > 0.05
            ? `rgba(${accent}, ${alpha})`
            : `rgba(${dot}, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const onVis = () => {
      running = !document.hidden;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [variant]);

  if (reduced) {
    return (
      <div
        aria-hidden
        className={
          "pointer-events-none absolute inset-0 " +
          "[background:radial-gradient(60%_50%_at_85%_15%,rgba(182,255,58,0.06),transparent_70%),radial-gradient(50%_40%_at_10%_95%,rgba(125,179,39,0.05),transparent_70%)] " +
          (className ?? "")
        }
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={"pointer-events-none absolute inset-0 h-full w-full " + (className ?? "")}
    />
  );
}
