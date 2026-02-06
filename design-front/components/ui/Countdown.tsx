"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownProps {
  targetDate: Date;
  className?: string;
  variant?: "default" | "compact" | "inline";
  label?: string;
}

export default function Countdown({
  targetDate,
  className = "",
  variant = "default",
  label = "Começa em:",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 24;

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className={`flex flex-col items-center ${variant === "compact" ? "px-2 py-1" : "px-3 py-2 md:px-4 md:py-3"} bg-gray-900 rounded-lg border ${isUrgent ? "border-red-500/50" : "border-gold-500/30"}`}>
      <span className={`font-mono font-bold ${variant === "compact" ? "text-lg md:text-xl" : "text-xl md:text-3xl lg:text-4xl"} ${isUrgent ? "text-red-500" : "text-gold-500"}`}>
        {String(value).padStart(2, "0")}
      </span>
      <span className={`text-gray-500 uppercase ${variant === "compact" ? "text-[10px]" : "text-xs md:text-sm"}`}>
        {label}
      </span>
    </div>
  );

  if (variant === "inline") {
    return (
      <div className={`inline-flex items-center gap-1 text-gold-500 font-mono ${className}`}>
        <Clock className="w-4 h-4" />
        <span>{String(timeLeft.days).padStart(2, "0")}d</span>
        <span>:</span>
        <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
        <span>:</span>
        <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
        <span>:</span>
        <span className={isUrgent ? "text-red-500" : ""}>{String(timeLeft.seconds).padStart(2, "0")}s</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <span className={`text-gray-400 mb-2 ${variant === "compact" ? "text-xs" : "text-sm md:text-base"}`}>
          {label}
        </span>
      )}
      <div className={`flex gap-2 md:gap-3 ${variant === "compact" ? "" : isUrgent ? "animate-pulse" : ""}`}>
        <TimeBlock value={timeLeft.days} label="Dias" />
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <TimeBlock value={timeLeft.minutes} label="Min" />
        <TimeBlock value={timeLeft.seconds} label="Seg" />
      </div>
      {isUrgent && (
        <p className="text-red-500 text-sm mt-2 font-semibold animate-pulse">
          ¡ Últimas vagas!
        </p>
      )}
    </div>
  );
}
