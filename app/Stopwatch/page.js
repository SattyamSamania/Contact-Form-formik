'use client'

import React, { useState, useEffect, useContext } from "react";
import styles from './AnalogClock.module.css'
import Stopwatch from "./Stopwatch";
import { UserContextProvider } from "@/Context/userContext1";
import Context from '@/Context/Context'
import { UserContext } from "@/Context/userContext1";


const page = () => {

  return (
    <div className={styles.container}>
      <UserContextProvider>
        <Context />

      </UserContextProvider>
    </div>

  );
};

export default page;
