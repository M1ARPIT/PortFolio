import React, { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fading effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green color
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // Reset drop randomly
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }

    const interval = setInterval(drawMatrix, 50);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixRain;
