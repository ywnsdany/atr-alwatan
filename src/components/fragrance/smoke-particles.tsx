"use client";

import React from "react";

interface SmokeParticlesProps {
  count?: number;
  className?: string;
}

export function SmokeParticles({ count = 8, className = "" }: SmokeParticlesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${12 + Math.random() * 20}px`,
            height: `${12 + Math.random() * 20}px`,
            background: `radial-gradient(circle, rgba(201,169,110,${0.15 + Math.random() * 0.2}), transparent)`,
            left: `${30 + Math.random() * 40}%`,
            bottom: "5%",
            animation: `${i % 2 === 0 ? "smoke-rise" : "smoke-rise-2"} ${3 + Math.random() * 4}s ease-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            filter: "blur(4px)",
          }}
        />
      ))}
    </div>
  );
}

export function IncenseSmoke({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${className}`}>
      {/* Incense base */}
      <div className="relative">
        <div className="w-1 h-8 bg-gradient-to-t from-amber-700 to-amber-600 mx-auto rounded-full opacity-60" />
        <div className="w-2 h-2 bg-amber-500 rounded-full mx-auto -mt-1 animate-pulse" />
        {/* Smoke wisps */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute -top-2 left-1/2 -translate-x-1/2"
            style={{
              animation: `${i % 2 === 0 ? "smoke-rise" : "smoke-rise-2"} ${3 + i * 0.8}s ease-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${8 + i * 4}px`,
                height: `${8 + i * 4}px`,
                background: `radial-gradient(circle, rgba(201,169,110,${0.3 - i * 0.05}), transparent)`,
                filter: "blur(3px)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
