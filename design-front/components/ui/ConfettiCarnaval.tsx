"use client";

import { useEffect, useRef, useCallback } from "react";

interface ConfettiProps {
  duration?: number;
  particleCount?: number;
}

// cores mais vibrantes mas ainda discretas
const CONFETTI_COLORS = [
  "rgba(212, 175, 55, 0.5)",   // dourado
  "rgba(0, 255, 127, 0.45)",    // verde
  "rgba(128, 0, 128, 0.45)",    // roxo
  "rgba(255, 140, 0, 0.45)",    // laranja
  "rgba(255, 0, 128, 0.4)",     // pink
];

export default function ConfettiCarnaval({
  duration = 6000,
  particleCount = 100,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  interface ConfettiParticle {
    x: number;
    y: number;
    size: number;
    color: string;
    speedY: number;
    speedX: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    shape: "rect" | "circle";
  }

  const createConfetti = useCallback((canvas: HTMLCanvasElement) => {
    const particles: ConfettiParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 10 + 4,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        opacity: Math.random() * 0.4 + 0.4,
        shape: Math.random() > 0.5 ? "rect" : "circle",
      });
    }

    return particles;
  }, [particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = createConfetti(canvas);

    const drawConfetti = (ctx: CanvasRenderingContext2D, particle: ConfettiParticle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;

      const size = particle.size;

      if (particle.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-size / 2, -size / 2, size, size * 0.6);
      }

      ctx.restore();
    };

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      // Fade in rapido, fade out mais lento
      const fadeIn = Math.min(elapsed / 300, 0.9);
      const fadeOut = elapsed > duration - 2000 ? Math.max(0, (duration - elapsed) / 2000) : 0.9;
      const opacityMultiplier = Math.min(fadeIn, fadeOut);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.y += particle.speedY;
        particle.x += particle.speedX + Math.sin(elapsed * 0.0008 + index) * 0.4;
        particle.rotation += particle.rotationSpeed;
        particle.opacity = opacityMultiplier * (Math.random() * 0.2 + 0.5);

        // Reset particle para loop continuo
        if (particle.y > canvas.height + 30) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        drawConfetti(ctx, particle);
      });

      if (elapsed < duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createConfetti, duration, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
