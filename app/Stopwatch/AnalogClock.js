'use client'

import React, { useContext } from 'react'
import { UserContext } from '@/Context/userContext1'
import styles from './AnalogClock.module.css'

const AnalogClock = () => {
    const { time1, setTime1 } = useContext(UserContext)

    return (


        <div className={styles.clock}>

            <div className={styles.milliClock}>
                <div
                    className={styles.milli_hand}
                    style={{
                        // transform: `rotateZ(${(time.getSeconds() * 6)}deg)`
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
                    // transform: `rotateZ(${time.getSeconds() * 6}deg)`
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


    )
}

export default AnalogClock