'use client'

import { useState } from 'react';
import Digital from './Digital';
import Analog from './Analog';
import Laps from './Laps';
import styles from './Stopwatch.module.css';

const page = () => {

    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [ID, setID] = useState(null);

    const handleStart = () => {
        if (time === 0) {
            let now = new Date();
            let ID = setInterval(() => {
                setTime(new Date().getTime() - now.getTime())
            }, 100);
            setID(ID);
        } else if (time > 0 && ID !== null) {
            clearInterval(ID);
            setID(null);
        } else {
            let now = new Date();
            let reStart = new Date(now.getTime() - time);
            let ID = setInterval(() => {
                setTime(new Date().getTime() - reStart.getTime());
            }, 100);
            setID(ID);
        }
    }

    const handleReset = () => {
        if (ID === null) {
            setTime(0);
            setLaps([]);
        } else {
            alert('Pause First then reset');
        }
    }

    const handleLap = () => {
        let NewLaps = [...laps];
        let NewLap;
        if (NewLaps.length) {
            let sinceLastLap = laps.reduce((a, b) => (a + b), 0);
            NewLap = time - sinceLastLap;
        } else {
            NewLap = time;
        }
        NewLaps.push(NewLap);
        setLaps(NewLaps);
    }

    return (
        <div className={styles.stopwatch}>
            <Analog secs={time} laps={laps} />
            <Digital time={time} />
            <Laps laps={laps} />
            <div className={styles.stopWatchButtons}>
                <button onClick={() => handleStart()} style={{ backgroundColor: 'green' }}>
                    {time === 0 ? 'Start' : ID === null ? 'Re-Start' : 'Pause'}
                </button>
                <button onClick={() => handleLap()} style={{ backgroundColor: 'lightblue' }}>
                    Lap
                </button>
                <button onClick={() => handleReset()} disabled={ID !== null} style={{ backgroundColor: 'red' }}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default page