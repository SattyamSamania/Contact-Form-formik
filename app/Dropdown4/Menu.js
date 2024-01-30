import React, { useState, useContext } from 'react';
import styles from './Dropdown4.module.css';
import { motion } from 'framer-motion';
import { UserContext } from "./page";



const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

const Menu = () => {


    const value 
    = useContext(UserContext);

   
  return (
    <div> 
        
         <motion.nav
    initial={false}
    animate={value.isOpen ? 'open' : 'closed'}
    className={styles.menu}
  >
    <motion.button
      className={styles.btn}
      whileTap={{ scale: 0.97 }}
      onClick={() => value.setIsOpen(!value.isOpen)}
    >
      {value.selectedItem || 'Select a Color'}
      <motion.div
        variants={{
          open: { rotate: 180 },
          closed: { rotate: 0 },
        }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
      >
        <svg width="15" height="15" viewBox="0 0 20 20">
          <path d="M0 7 L 20 7 L 10 16" />
        </svg>
      </motion.div>
    </motion.button>
    <motion.ul
      className={styles.navLinks}
      variants={{
        open: {
          clipPath: 'inset(0% 0% 0% 0% round 10px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: 'inset(10% 50% 90% 50% round 10px)',
          transition: { type: 'spring', bounce: 0, duration: 0.3 },
        },
      }}
      style={{ pointerEvents: value.isOpen ? 'auto' : 'none' }}
    >
      <motion.li variants={value.itemVariants} whileHover={{ scale: 1.1 }} onClick={() => value.handleItemClick('Blue')} className={value.selectedItem === 'Blue' ? `${styles.selectedItem}  ` : ''}>
        Blue
      </motion.li>
      <motion.li variants={value.itemVariants} whileHover={{ scale: 1.1 }} onClick={() => value.handleItemClick('Red')} className={value.selectedItem === 'Red' ? styles.selectedItem : ''}>
        Red
      </motion.li>
      <motion.li variants={value.itemVariants} whileHover={{ scale: 1.1 }} onClick={() => value.handleItemClick('Green')} className={value.selectedItem === 'Green' ? styles.selectedItem : ''}>
        Green
      </motion.li>
      <motion.li variants={value.itemVariants} whileHover={{ scale: 1.1 }} onClick={() => value.handleItemClick('Yellow')} className={value.selectedItem === 'Yellow' ? styles.selectedItem : ''}>
        Yellow
      </motion.li>
      <motion.li variants={value.itemVariants} whileHover={{ scale: 1.1 }} onClick={() => value.handleItemClick('Black')} className={value.selectedItem === 'Black' ? styles.selectedItem : ''}>
        Black
      </motion.li>
    </motion.ul>
  </motion.nav></div>
  )
}

export default Menu