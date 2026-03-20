import React, { useRef, useEffect } from 'react';
import './HeartRate.css';

interface HeartRateProps {
  color?: string;
  speed?: number;
}

const HeartRate: React.FC<HeartRateProps> = ({ 
  color = '#ff0000', 
  speed = 2.5 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let x = 0;
    let lastY = 0;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      lastY = canvas.height / 2;
      // Initial clear
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const draw = () => {
      const centerY = canvas.height / 2;
      
      // Reset shadow before filling background to prevent red bleed
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'; // Slightly faster fade for cleaner black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let y = centerY;

      // ECG wave pattern logic (more realistic)
      const pos = x % 300; // Total length of one cycle
      
      if (pos > 50 && pos < 65) {
        // P Wave (Small bump)
        y = centerY - Math.sin((pos - 50) * Math.PI / 15) * 10;
      } else if (pos >= 75 && pos < 80) {
        // Q Dip (Small dip before R)
        y = centerY + 10;
      } else if (pos >= 80 && pos < 90) {
        // R Peak (The main spike)
        y = centerY - 120;
      } else if (pos >= 90 && pos < 100) {
        // S Dip (Deep dip after R)
        y = centerY + 40;
      } else if (pos >= 130 && pos < 170) {
        // T Wave (Medium bump)
        y = centerY - Math.sin((pos - 130) * Math.PI / 40) * 25;
      }

      // Draw the segment from last position to new position
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Neon Glow
      ctx.shadowBlur = 12;
      ctx.shadowColor = color;
      
      ctx.moveTo(x - speed, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      lastY = y;
      x += speed;

      // Reset when reaching the edge
      if (x > canvas.width) {
        x = 0;
        lastY = centerY;
        // Don't fill with black here, let the trail logic handle it for a smooth wrap
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, speed]);

  return <canvas ref={canvasRef} className="heart-rate-canvas" />;
};

export default HeartRate;
