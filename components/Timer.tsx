"use client";

import { useEffect, useState } from "react";
import useStore from "@/lib/store";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const reset = useStore((state) => state.reset);

  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(() => {
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);

    // Cleanup the interval on component unmount or reset
    return () => clearInterval(timer);
  }, [seconds]); // Empty dependency array ensures the interval is only set once on mount

  // Reset the timer when the `reset` state changes
  useEffect(() => {
    setMinutes(0);
    setSeconds(0);
  }, [reset]);

  return (
    <div className="w-1/2 bg-slate-100 flex justify-between items-center p-5 rounded-lg">
      <p className="text-2xl font-bold tracking-wide">Time</p>
      <p className="text-3xl font-semibold tracking-wide">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </p>
    </div>
  );
};

export default Timer;
