'use client'

import React, { useState, useRef, useEffect, createContext } from 'react';
import styles from './Dropdown4.module.css';
import { motion } from 'framer-motion';
import Header from './Header';
import Menu from './Menu';



//Initialize Context

 export const UserContext = createContext();


const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBorder, setSelectedBorder] = useState('black');
  // const prevSelectedItemRef = useRef(null);


  // useEffect(() => {
   
  //   prevSelectedItemRef.current = selectedItem;
  // }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedBorder(selectedItem); 
    setSelectedItem(item);
    setIsOpen(false);
  };

  const value= {
    selectedBorder, selectedItem, isOpen,
     setIsOpen, handleItemClick
  }

  return (

    <UserContext.Provider value={value}>
    <section className={styles.body}>
      <div className={styles.container} style={{ backgroundColor: selectedItem, borderColor: selectedBorder }}>
        <div className={styles.heading}>
         

          <Header/>
        </div>
        <Menu/>

      
      </div>
    </section>
    </UserContext.Provider>
  );
};

export default Page;
