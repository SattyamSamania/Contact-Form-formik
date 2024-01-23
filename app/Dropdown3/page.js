import React from 'react'
import styles from './Dropdown3.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown
    
} from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (


    <>
    <section className={styles.section}>
   
  
    <nav role="navigation" className={styles.primaryNavigation}>
    
    <ul className={styles.navLinks}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>

      <li  className='shadow-xl'><a  href="#">Services  <FontAwesomeIcon icon={faCaretDown} /> </a>
        <ul className={styles.dropdown}>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Graphic Design</a></li>
          <li><a href="#">Android Dev</a></li>
        </ul>
      </li>
      <li><a href="#">Portfolio</a></li>

      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>


  </section>
  </>
  )
}

export default page