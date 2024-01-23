'use client'

import React, { useState } from 'react';
import styles from './Dropdown2.module.css';
import { motion } from 'framer-motion';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <main className={styles.body}>
      <div className={styles.main}>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className={styles.menu}
        >
          <motion.button
            className={styles.btn}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
           {selectedItem || 'Menu'}
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
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}
            onClick={() => handleItemClick('Item 1')}
            className={selectedItem === 'Item 1' ? `${styles.selectedItem}  ` : ''}
            >
              Item 1
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}
            
            onClick={() => handleItemClick('Item 2')}
            className={selectedItem === 'Item 2' ? styles.selectedItem : ''}
            >
              Item 2
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}
            
            onClick={() => handleItemClick('Item 3')}
            className={selectedItem === 'Item 3' ? styles.selectedItem : ''}
            >
              Item 3
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}
              onClick={() => handleItemClick('Item 4')}
              className={selectedItem === 'Item 4' ? styles.selectedItem : ''}
            >
              Item 4
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}
              onClick={() => handleItemClick('Item 5')}
              className={selectedItem === 'Item 5' ? styles.selectedItem : ''}
            >
              Item 5
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </main>
  );
};

export default page;
