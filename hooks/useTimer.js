import { useState, useEffect, useRef } from 'react';

export default function useTimer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  return {
    time,
    start: () => setRunning(true),
    stop: () => setRunning(false),
    reset: () => setTime(0),
  };
}