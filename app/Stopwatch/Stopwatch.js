'use client'

import React, { useState, useEffect } from 'react';
import styles from './AnalogClock.module.css';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);
  const [lastLapTime, setLastLapTime] = useState(0);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
    setLapTimes([]);
    setLastLapTime(0);
  }

  function lap() {
    const currentTimestamp = new Date().getTime();
    const lapTime = (currentTimestamp - lastLapTime) / 1000; // in seconds

    setLapTimes([...lapTimes, lapTime]);
    setLastLapTime(currentTimestamp);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className={styles.btn}>
      <button onClick={toggle} className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={lap} disabled={!isActive} className="button">
        Lap
      </button>
      <button onClick={reset} className="button">
        Reset
      </button>

      <div className="time">{seconds}s</div>

      <div className="lapTimes">
        <h2>Lap Times</h2>
        <ul>
          {lapTimes.map((lap, index) => (
            <li key={index}>{`Lap ${index + 1}: ${lap.toFixed(2)}s`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
