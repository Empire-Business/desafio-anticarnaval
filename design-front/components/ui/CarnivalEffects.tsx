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

    // Confetti particles
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
    const particleCount = 30; // Subtle amount

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: -50,
      size: Math.random() * 4 + 2,
      color: CARNIVAL_COLORS[Math.floor(Math.random() * CARNIVAL_COLORS.length)],
      speedY: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.3,
    });

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;

        // Reset if off screen
        if (particle.y > canvas.height + 50) {
          particles[index] = createParticle();
        }

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;

        // Draw confetti shape (rectangle)
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 1.5);

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
      {/* Confetti canvas - very subtle */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.4 }}
      />

      {/* Carnival glow effects on edges */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left side - green/purple glow */}
        <div className="absolute left-0 top-0 w-32 md:w-64 h-full carnival-glow-left animate-distant-pulse" />

        {/* Right side - pink/orange glow */}
        <div className="absolute right-0 top-0 w-32 md:w-64 h-full carnival-glow-right animate-distant-pulse" style={{ animationDelay: "2s" }} />

        {/* Top edge - subtle carnival colors */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

        {/* Bottom edge - subtle carnival colors */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
      </div>

      {/* Floating silhouette elements - very subtle */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02]">
        <svg
          className="absolute -left-20 top-1/4 w-40 h-40 text-purple-500 animate-distant-pulse"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="30" r="15" />
          <path d="M30 50 Q50 45 70 50 L75 90 L25 90 Z" />
        </svg>

        <svg
          className="absolute -right-16 top-1/3 w-32 h-32 text-green-500 animate-distant-pulse"
          style={{ animationDelay: "1s" }}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="30" r="15" />
          <path d="M30 50 Q50 45 70 50 L75 90 L25 90 Z" />
        </svg>

        <svg
          className="absolute left-1/4 -bottom-20 w-48 h-48 text-pink-500 animate-distant-pulse"
          style={{ animationDelay: "0.5s" }}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="30" r="15" />
          <path d="M30 50 Q50 45 70 50 L75 90 L25 90 Z" />
        </svg>

        <svg
          className="absolute right-1/4 -bottom-16 w-40 h-40 text-orange-500 animate-distant-pulse"
          style={{ animationDelay: "1.5s" }}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="30" r="15" />
          <path d="M30 50 Q50 45 70 50 L75 90 L25 90 Z" />
        </svg>
      </div>

      {/* Decorative mask elements - stylized carnival masks */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-20 right-10 md:right-20">
          <svg
            className="w-16 h-16 md:w-24 md:h-24 text-gold-500"
            style={{ animation: "mask-float 6s ease-in-out infinite" }}
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            {/* Stylized mask outline */}
            <path d="M20 50 Q30 30 50 25 Q70 30 80 50 Q85 65 75 75 Q50 90 25 75 Q15 65 20 50 Z" />
            <ellipse cx="35" cy="50" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="65" cy="50" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-10 md:left-20">
          <svg
            className="w-12 h-12 md:w-20 md:h-20 text-gold-500"
            style={{ animation: "mask-float 8s ease-in-out infinite", animationDelay: "2s" }}
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M20 50 Q30 30 50 25 Q70 30 80 50 Q85 65 75 75 Q50 90 25 75 Q15 65 20 50 Z" />
            <ellipse cx="35" cy="50" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="65" cy="50" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </>
  );
}
