"use client";

import { useEffect, useRef } from "react";
import { CARNIVAL_COLORS } from "@/lib/constants";

export default function CarnivalEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 15; // Fewer particles for better performance

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: -50,
      size: Math.random() * 3 + 1,
      color: CARNIVAL_COLORS[Math.floor(Math.random() * CARNIVAL_COLORS.length)],
      speedY: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.3 + 0.2,
    });

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;

        if (particle.y > canvas.height + 50) {
          particles[index] = createParticle();
        }

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.fillRect(-(particle.size ?? 2) / 2, -(particle.size ?? 2) / 2, particle.size ?? 2, (particle.size ?? 2) * 1.5);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-32 md:w-48 h-full carnival-glow-left animate-distant-pulse" />
        <div
          className="absolute right-0 top-0 w-32 md:w-48 h-full carnival-glow-right animate-distant-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.015]">
        <div className="absolute -left-20 top-1/4 w-40 h-40 text-purple-500 animate-distant-pulse">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <circle cx="50" cy="30" r="15" />
            <path d="M30 50 Q50 45 70 50 L75 90 L25 90 Z" />
          </svg>
        </div>

        <div
          className="absolute -right-16 top-1/3 w-32 h-32 text-green-500 animate-distant-pulse"
          style={{ animationDelay: "1s" }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <circle cx="50" cy="30" r="15" />
            <path d="M30 50 Q50 45 70 50 L75 90 L25 90 Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
