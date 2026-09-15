import React, { useEffect, useRef } from "react";

function AnimatedCanvasBackground({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrame;

    // Detect touch devices
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    // Mouse position
    let mouse = {
      x: width / 2,
      y: height / 2,
      radius: 160,
    };

    // ----------------------------------------
    // CANVAS RESIZE
    // ----------------------------------------

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      mouse.x = width / 2;
      mouse.y = height / 2;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // ----------------------------------------
    // MOUSE
    // ----------------------------------------

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Only use mouse interaction on devices
    // that actually have a mouse/pointer.
    if (!isTouchDevice) {
      window.addEventListener(
        "mousemove",
        handleMouseMove
      );
    }

    // ----------------------------------------
    // BLOG SYMBOLS
    // ----------------------------------------

    const BLOG_SYMBOLS = [
      "✒️",
      "📖",
      "💡",
      "✦",
      "💬",
      "⚡",
      "#",
      "✎",
      "✨",
    ];

    // ----------------------------------------
    // RESPONSIVE PARTICLE COUNT
    // ----------------------------------------

    const getParticleCount = () => {
      if (width < 480) {
        return 12;
      }

      if (width < 768) {
        return 18;
      }

      if (width < 1200) {
        return 30;
      }

      return 45;
    };

    const particleCount = getParticleCount();

    // ----------------------------------------
    // PARTICLES
    // ----------------------------------------

    const particles = Array.from(
      { length: particleCount },
      () => ({
        x: Math.random() * width,

        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.4,

        vy: (Math.random() - 0.5) * 0.4,

        size: Math.random() * 14 + 10,

        symbol:
          BLOG_SYMBOLS[
            Math.floor(
              Math.random() *
                BLOG_SYMBOLS.length
            )
          ],

        opacity:
          Math.random() * 0.35 + 0.15,

        rotation:
          Math.random() *
          Math.PI *
          2,

        vRot:
          (Math.random() - 0.5) *
          0.008,
      })
    );

    // ----------------------------------------
    // ANIMATION
    // ----------------------------------------

    const render = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        const p = particles[i];

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        p.rotation += p.vRot;

        // Wrap around screen
        if (p.x < 0) {
          p.x = width;
        }

        if (p.x > width) {
          p.x = 0;
        }

        if (p.y < 0) {
          p.y = height;
        }

        if (p.y > height) {
          p.y = 0;
        }

        // ------------------------------------
        // MOUSE INTERACTION
        // ------------------------------------

        if (!isTouchDevice) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            dist > 0 &&
            dist < mouse.radius
          ) {
            const force =
              (mouse.radius - dist) /
              mouse.radius;

            p.x -=
              (dx / dist) *
              force *
              2.5;

            p.y -=
              (dy / dist) *
              force *
              2.5;
          }
        }

        // ------------------------------------
        // DRAW SYMBOL
        // ------------------------------------

        ctx.save();

        ctx.translate(
          p.x,
          p.y
        );

        ctx.rotate(
          p.rotation
        );

        ctx.font = `${p.size}px sans-serif`;

        ctx.fillStyle = isDarkMode
          ? `rgba(168, 85, 247, ${p.opacity})`
          : `rgba(99, 102, 241, ${
              p.opacity * 0.85
            })`;

        ctx.textAlign = "center";

        ctx.textBaseline = "middle";

        ctx.fillText(
          p.symbol,
          0,
          0
        );

        ctx.restore();

        // ------------------------------------
        // CONNECTION LINES
        // ------------------------------------

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p2 = particles[j];

          const distance = Math.hypot(
            p.x - p2.x,
            p.y - p2.y
          );

          if (distance < 130) {
            const alpha =
              (1 - distance / 130) *
              (isDarkMode
                ? 0.15
                : 0.12);

            ctx.beginPath();

            ctx.moveTo(
              p.x,
              p.y
            );

            ctx.lineTo(
              p2.x,
              p2.y
            );

            ctx.strokeStyle =
              isDarkMode
                ? `rgba(129, 140, 248, ${alpha})`
                : `rgba(99, 102, 241, ${alpha})`;

            ctx.lineWidth = 0.85;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(
          render
        );
    };

    render();

    // ----------------------------------------
    // CLEANUP
    // ----------------------------------------

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      if (!isTouchDevice) {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      }
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",

        inset: 0,

        width: "100%",

        height: "100%",

        pointerEvents: "none",

        zIndex: 1,
      }}
    />
  );
}

export default AnimatedCanvasBackground;
