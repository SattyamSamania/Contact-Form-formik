import React from 'react'
import styles from './Dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown
    
} from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (


    <>
    {/* Dropdown 1 */}
    <section>
   
    <div className='flex justify-center'>
      <h1 className='font-bold text-4xl m-5'>Dropdown 1</h1>
    </div>
    <nav role="navigation" className={styles.primaryNavigation}>
    
    <ul className={styles.navLinks}>
      <li><a href="#">Home</a></li>
      <li><a href="#">Work <FontAwesomeIcon icon={faCaretDown} /> </a>
        <ul className={styles.dropdown}>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Illustration</a></li>
          <li><a href="#">Iconography</a></li>
        </ul>
      </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  {/* Dropdown 2 */}

  <div className='flex justify-center'>
      <h1 className='font-bold text-4xl m-5'>Dropdown 2</h1>
    </div>
  <nav>

   
  </nav>
  </section>
  </>
  )
}

export default page