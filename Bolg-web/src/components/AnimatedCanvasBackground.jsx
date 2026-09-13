import React, { useEffect, useRef } from "react";

function AnimatedCanvasBackground({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrame;

    let mouse = { x: width / 2, y: height / 2, radius: 160 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    const BLOG_SYMBOLS = ["✒️", "📖", "💡", "✦", "💬", "⚡", "#", "✎", "✨"];

    const particleCount = Math.min(Math.floor(width / 24), 45);

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 14 + 10,
      symbol: BLOG_SYMBOLS[Math.floor(Math.random() * BLOG_SYMBOLS.length)],
      opacity: Math.random() * 0.35 + 0.15,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.008
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;

          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px sans-serif`;

        ctx.fillStyle = isDarkMode
          ? `rgba(168, 85, 247, ${p.opacity})`
          : `rgba(99, 102, 241, ${p.opacity * 0.85})`;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (distance < 130) {
            const alpha =
              (1 - distance / 130) * (isDarkMode ? 0.15 : 0.12);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = isDarkMode
              ? `rgba(129, 140, 248, ${alpha})`
              : `rgba(99, 102, 241, ${alpha})`;

            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1
      }}
    />
  );
}

export default AnimatedCanvasBackground;