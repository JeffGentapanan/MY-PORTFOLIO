import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  useOriginalCharsOnly?: boolean;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover' | 'both';
}

const DecryptedText = React.memo(({
  text,
  speed = 50,
  maxIterations = 10,
  useOriginalCharsOnly = false,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'view',
  ...props
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const isAnimatingRef = useRef(false);
  const hasAnimatedRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  const startScrambling = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            
            // Calculate when this specific character should start resolving
            const revealAt = Math.floor((index / text.length) * maxIterations);
            
            if (iteration >= revealAt + 3) { // +3 adds a nice overlap/delay
              return text[index];
            }

            const availableChars = useOriginalCharsOnly ? text : letters;
            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration >= maxIterations + 5) { // Ensure all characters have time to resolve
        setDisplayText(text);
        if (intervalRef.current) clearInterval(intervalRef.current);
        isAnimatingRef.current = false;
      }
    }, speed);
  }, [text, speed, maxIterations, useOriginalCharsOnly]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (animateOn === 'view' || animateOn === 'both') && !hasAnimatedRef.current) {
          startScrambling();
          hasAnimatedRef.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateOn, startScrambling]);

  useEffect(() => {
    if ((animateOn === 'hover' || animateOn === 'both') && isHovering) {
      startScrambling();
    }
  }, [isHovering, animateOn, startScrambling]);

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {displayText.split("").map((char, index) => {
        const isRevealed = char === text[index];
        return (
          <span
            key={index}
            className={isRevealed ? className : encryptedClassName}
          >
            {char}
          </span>
        );
      })}
    </motion.span>
  );
});

export default DecryptedText;
