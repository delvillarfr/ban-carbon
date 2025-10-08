'use client';

import { useState, useEffect } from 'react';

interface CounterProps {
  className?: string;
}

export default function Counter({
  className = ''
}: CounterProps) {
  const getInitialCount = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
    return Math.floor(38438790.124 + 44661459.21 * (dayOfYear - 180) / 180);
  };

  const [count, setCount] = useState(getInitialCount());

  // Calculate interval: 1 ton per (1 / tonsPerSecond) seconds
  const tonsPerSecond = 44661459.21 / 180 / 86400;
  const intervalMs = (1 / tonsPerSecond) * 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [intervalMs]);

  return (
    <div className={className} suppressHydrationWarning>
      {count.toLocaleString('en-US')}
    </div>
  );
}
