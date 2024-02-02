import { useState, useRef } from 'react';

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [lapStartTime, setLapStartTime] = useState(0);
  const intervalRef = useRef();

  const startStopHandler = () => {
    setRunning(!running);

    if (!running) {
      setLapStartTime(time);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const lapHandler = () => {
    const lapElapsed = time - lapStartTime;
    setLaps([...laps, lapElapsed]);
    setLapStartTime(time);
  };

  const resetHandler = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setLapStartTime(0);
  };

  return (
    <div>
      <div className="text-4xl font-bold mb-4">{formatTime(time)}</div>
      <div className="flex space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={startStopHandler}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={lapHandler}
          disabled={!running}
        >
          Lap
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
      {laps.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Lap Timings</h2>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                Lap {index + 1}: {formatTime(lap)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default Stopwatch;
