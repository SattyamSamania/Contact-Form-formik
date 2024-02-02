'use client'

import React, { useState, useEffect } from "react";
import styles from './AnalogClock.module.css'
import Stopwatch from "./Stopwatch";

const page = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      // setMilliseconds(currentTime.getMilliseconds());
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.container}>

<Stopwatch/>

    <div className={styles.clock}>

      <div className={styles.milliClock}>
        <div
          className={styles.milli_hand}
          style={{
            transform: `rotateZ(${(time.getSeconds())}deg)`
          }}
        />
        <span className={styles.sixty}>60</span>

        <span className={styles.fifteen}>15</span>

        <span className={styles.thirty}>30</span>

        <span className={styles.fortyFive}>45</span>

      </div>


      <div
        className={styles.sec_hand}
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`
        }}
      />



      
      <span className={styles.twelve}>60</span>
      <span className={styles.one}>5</span>
      <span className={styles.two}>10</span>
      <span className={styles.three}>15</span>
      <span className={styles.four}>20</span>
      <span className={styles.five}>25</span>
      <span className={styles.six}>30</span>
      <span className={styles.seven}>35</span>
      <span className={styles.eight}>40</span>
      <span className={styles.nine}>45</span>
      <span className={styles.ten}>50</span>
      <span className={styles.eleven}>55</span>
    </div>
    </div>

  );
};

export default page;
