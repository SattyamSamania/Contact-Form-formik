'use client'

import styles from './AnalogClock.module.css'
import Stopwatch from "./Stopwatch";
import AnalogClock from "./AnalogClock";
import { UserContextProvider } from "@/Context/userContext1";

const page = () => {

    return (
        <div className={styles.container}>
            <UserContextProvider>
                <div>
                    <AnalogClock />
                    <Stopwatch />
                </div>
            </UserContextProvider>
        </div>
    );
};

export default page;
