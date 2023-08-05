import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setTimerRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handlePause = () => {
    setTimerRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    setTimerRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleReset = () => {
    setTimerRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div>
      <p id="time" data-testid="time">{formatTime(time)}</p>
      {timerRunning ? (
        <div>
          <button id="pause" data-testid="pause" onClick={handlePause}>Pause</button>
          <button id="reset" data-testid="reset" onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <button id="start" data-testid="start" onClick={handleStart}>Start</button>
      )}
      {timerRunning ? null : (
        <button id="resume" data-testid="resume" onClick={handleResume}>Resume</button>
      )}
    </div>
  );
};

export default Stopwatch;
