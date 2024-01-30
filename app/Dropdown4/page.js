'use client'

import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import styles from './Dropdown4.module.css';
import { motion } from 'framer-motion';

import Context from '../Context/Context';
import { UserContext } from '../Context/userContext';
import { UserContextProvider } from '../Context/userContext';

//Initialize Context






const Page = () => {

// const value = {selectedItem, selectedBorder, isOpen, setIsOpen, handleItemClick}


  return (
<section className={styles.body}>
    <UserContextProvider  >
    
   
   <Context/>
    </UserContextProvider>
    </section>
  );
};

export default Page;
