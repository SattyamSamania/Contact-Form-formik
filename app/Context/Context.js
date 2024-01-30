import React, { useState, createContext, useContext } from 'react';
import Header from '../Dropdown4/Header'
import Menu from '../Dropdown4/Menu'
import styles from '../Dropdown4/Dropdown4.module.css'
import { UserContext } from './userContext';





const Context = () => {
  const {selectedBorder, selectedItem } = useContext(UserContext);



  return (
    <div>

      <div className={styles.container} style={{ backgroundColor: selectedItem, borderColor: selectedBorder }}>
        <div className={styles.heading}>


          <Header />
        </div>
        <Menu />


      </div></div>
  )
}

export default Context