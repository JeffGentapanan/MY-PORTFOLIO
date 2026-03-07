import { useRef, useEffect } from 'react';
import './Waves.css';

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  style?: React.CSSProperties;
  className?: string;
}

class Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.vx = 0;
    this.vy = 0;
  }

  update(
    mouseX: number,
    mouseY: number,
    friction: number,
    tension: number,
    maxCursorMove: number
  ) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const force = Math.max(0, (maxCursorMove - distance) / maxCursorMove);

    this.vx += dx * force * 0.5;
    this.vy += dy * force * 0.5;

    this.vx += (this.originX - this.x) * tension;
    this.vy += (this.originY - this.y) * tension;

    this.vx *= friction;
    this.vy *= friction;

    this.x += this.vx;
    this.y += this.vy;
  }
}

const Waves: React.FC<WavesProps> = ({
  lineColor = 'rgba(255, 255, 255, 0.3)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  style = {},
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const pointsRef = useRef<Point[][]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    ctxRef.current = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initPoints();
    };

    const initPoints = () => {
      const points: Point[][] = [];
      const width = canvas.width;
      const height = canvas.height;

      for (let y = -yGap; y < height + yGap; y += yGap) {
        const row: Point[] = [];
        for (let x = -xGap; x < width + xGap; x += xGap) {
          row.push(new Point(x, y));
        }
        points.push(row);
      }
      pointsRef.current = points;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();

    let animationFrameId: number;
    const render = (time: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      pointsRef.current.forEach((row) => {
        ctx.moveTo(row[0].x, row[0].y);
        
        row.forEach((point) => {
          point.originX = point.originX + Math.sin(time * waveSpeedX + point.originY) * 0.1;
          point.originY = point.originY + Math.cos(time * waveSpeedY + point.originX) * 0.1;

          const offsetX = Math.sin(time * waveSpeedX + point.originY * 0.01) * waveAmpX;
          const offsetY = Math.cos(time * waveSpeedY + point.originX * 0.01) * waveAmpY;

          point.update(
            mouseRef.current.x - offsetX,
            mouseRef.current.y - offsetY,
            friction,
            tension,
            maxCursorMove
          );

          ctx.lineTo(point.x + offsetX, point.y + offsetY);
        });
      });

      ctx.stroke();
      animationFrameId = requestAnimationFrame((t) => render(t * 0.01));
    };

    animationFrameId = requestAnimationFrame((t) => render(t * 0.01));

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap, friction, tension, maxCursorMove]);

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor, ...style }}
      className={`waves-container ${className}`}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Waves;
