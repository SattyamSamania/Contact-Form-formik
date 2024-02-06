import React, { useState, createContext, useContext } from 'react';
import { UserContext } from './userContext1';
import page from '../app/Stopwatch/page'
import Stopwatch from '@/app/Stopwatch/Stopwatch';
import AnalogClock from '@/app/Stopwatch/AnalogClock';





const Context = () => {
    const { running, resetHandler, time1, setTime1, lapHandler, lapStartTime, setLapStartTime, setRunning, setTime, setLaps, intervalRef, startStopHandler, laps, formatTime } = useContext(UserContext);



    return (
        <div>



            <AnalogClock />

            <Stopwatch />

        </div>
    )
}

export default Context