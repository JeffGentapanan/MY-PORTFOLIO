import { useEffect, useState, useRef } from 'react';
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

const DecryptedText = ({
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let currentIteration = 0;

    const startScrambling = () => {
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((char) => {
              if (char === " ") return " ";
              const availableChars = useOriginalCharsOnly ? text : letters;
              return availableChars[Math.floor(Math.random() * availableChars.length)];
            })
            .join("")
        );

        currentIteration++;
        if (currentIteration >= maxIterations) {
          setDisplayText(text);
          clearInterval(interval);
        }
      }, speed);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animateOn === 'view' && !hasAnimated) {
          startScrambling();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (animateOn === 'hover' && isHovering) {
      startScrambling();
    }

    return () => {
      if (interval) clearInterval(interval);
      observer.disconnect();
    };
  }, [isHovering, text, speed, maxIterations, animateOn, hasAnimated, useOriginalCharsOnly]);

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
};

export default DecryptedText;
