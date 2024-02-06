'use client'

import { useContext } from 'react';
import styles from './AnalogClock.module.css'
import { UserContext } from '@/Context/userContext1';

const Stopwatch = () => {
  const { 
    running, resetHandler, lapHandler, 
    startStopHandler, laps, formatTime, 
    formatTime1 
} = useContext(UserContext);

  return (
    <div className={styles.digital}>
      <div className="text-4xl font-bold mb-4 text-center">{formatTime()}</div>
      <div className="flex space-x-4  justify-center">
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
        <div className="mt-4 " style={{
          overflowY: 'scroll',
          height: '200px',
          width: '400px',
          backgroundColor: 'green',
          overflowX: 'hidden',
          margin: ' 10px auto',
          padding: '4px',
          textAlign: 'center',
          borderRadius: '5px'
        }}>
          <h2 className="text-xl font-bold mb-2 text-center ">Lap Timings</h2>
          <ul>
            {laps.map((lap, index) => (
              <li
                className='text-center font-bold'
                key={index}>
                Lap {index + 1}: {formatTime1(lap)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Stopwatch;
