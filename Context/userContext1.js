import { createContext, useState, useRef, useEffect } from 'react';



export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

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

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };


    //   Analog Clock Logic 

    const [time1, setTime1] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            const currentTime = new Date();
            setTime1(currentTime);
            // setMilliseconds(currentTime.getMilliseconds());
        }, 100);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const value = { running, time, time1, setTime1, useEffect, resetHandler, lapHandler, lapStartTime, setLapStartTime, setRunning, setTime, setLaps, intervalRef, startStopHandler, laps, formatTime }
    return (

        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}




