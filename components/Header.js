
'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import styles from './Navbar.module.css';
import Title from '@/public/Title.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css'; 

const Header = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname() || '/';

    const links = [
        { id: 1, link: "home", href: '/' },
    ];

    // Add dropdown items
    const dropdownItems = [
        { id: 5, link: "ContactForm1", href: '/Contact1' },
        { id: 6, link: "ContactForm2", href: '/Contact2' },
        { id: 7, link: "Form1", href: '/Form1' },
        { id: 8, link: "Form2", href: '/Form2' },




    ];

    const dropdownItems2 = [
        { id: 9, link: "Dropdown", href: '/Dropdown' },
        { id: 10, link: "Dropdown2", href: '/Dropdown2' },
        { id: 11, link: "Dropdown3", href: '/Dropdown3' },


    ]

    // State to track the active link and dropdown item
    const [activeLink, setActiveLink] = useState(1);
    const [activeDropdown, setActiveDropdown] = useState(false);

    // Function to handle link click
    const handleLinkClick = (id, href) => {
        setActiveLink(id);
        setNav(false);
        router.push(href);
    };

    // Function to handle dropdown item click
    const handleDropdownItemClick = (id, href) => {
        setActiveDropdown(false);
        handleLinkClick(id, href);
    };

    return (


        <div className={styles.header}>
            <Link href='/' onClick={() => handleLinkClick(1, '/')}>
                <Image
                    src={Title}
                    alt='logo'
                    width={120}
                    height={60}
                />
            </Link>

            {/* Desktop Navigation  */}
            <div className={styles.navLinks}>

                {/* Home Link */}
                <Link href={links[0].href}>
                    <motion.div
                        className={styles.navLink}
                        whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ borderBottom: "2px solid transparent" }}
                        animate={{ borderBottom: (activeLink === 1) ? "2px solid white" : "2px solid transparent" }}
                    >
                        {links[0].link}
                    </motion.div>
                </Link>

                {/* Contact Forms Link */}
                <div className={styles.desktopNav}>
                    <motion.div
                        className={styles.navLink}
                        whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ borderBottom: "2px solid transparent" }}
                        animate={{ borderBottom: (activeLink === 2) ? "2px solid white" : "2px solid transparent" }}
                    // onClick={() => setActiveDropdown(!activeDropdown)}
                    >
                        Contact Forms <FontAwesomeIcon icon={faCaretDown}  />
                    </motion.div>

                    {/* dropdown menu  */}

                    <ul className={styles.dropdownMenu}>
                        {dropdownItems.map(({ id, link, href }) => (
                            <li key={id}>
                                <Link href={href}>
                                    <motion.div
                                        className={styles.navLink}
                                        whileHover={{ color: 'rgb(126,125,124)' }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleDropdownItemClick(id, href)}

                                    >
                                        {link}
                                    </motion.div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Dropdown menus  */}

                <div className={styles.desktopNav}>
                    <motion.div
                        className={styles.navLink}
                        whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ borderBottom: "2px solid transparent" }}
                        animate={{ borderBottom: (activeLink === 2) ? "2px solid white" : "2px solid transparent" }}
                    // onClick={() => setActiveDropdown(!activeDropdown)}
                    >
                        Dropdowns <FontAwesomeIcon icon={faCaretDown} />
                    </motion.div>

                    {/* dropdown menu  */}

                    <ul className={styles.dropdownMenu}>
                        {dropdownItems2.map(({ id, link, href }) => (
                            <li key={id}>
                                <Link href={href}>
                                    <motion.div
                                        className={styles.navLink}
                                        whileHover={{ color: 'rgb(126,125,124)' }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleDropdownItemClick(id, href)}

                                    >
                                        {link}
                                    </motion.div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <span style={{ width: '90px' }} />

            {/* Mobile Navigation */}
            <div onClick={() => setNav(!nav)} className={styles.mobileNavIcon}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <AnimatePresence>
                {nav && (
                    <motion.ul
                        className={styles.mobileNavLinks}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                    >

                        {/* Mobile Home Link  */}
                        <Link href={links[0].href}>
                            <motion.div
                                className={styles.navLink}
                                whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ borderBottom: "2px solid transparent" }}
                                animate={{ borderBottom: (activeLink === 1) ? "2px solid white" : "2px solid transparent" }}
                            >
                                {links[0].link}
                            </motion.div>
                        </Link>

                        {/* Mobile Contact Forms Link */}
                        <div className={styles.mobileNav}>
                            <motion.div
                                className={styles.navLink}
                                whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ borderBottom: "2px solid transparent" }}
                                animate={{ borderBottom: (activeLink === 2) ? "2px solid white" : "2px solid transparent" }}
                            // onClick={() => setActiveDropdown(!activeDropdown)}
                            >
                                Contact Forms <FontAwesomeIcon icon={faCaretDown} />
                            </motion.div>

                            {/* dropdown menu  */}

                            <ul className={styles.dropdownMenu2}>
                                {dropdownItems.map(({ id, link, href }) => (
                                    <li key={id}>
                                        <Link href={href}>
                                            <motion.div
                                                className={styles.navLink}
                                                whileHover={{ color: 'rgb(126,125,124)' }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleDropdownItemClick(id, href)}
                                            >
                                                {link}
                                            </motion.div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>





                        </div>

                        {/* Mobile Dropdown Menu  */}


                        <div className={styles.mobileNav}>
                            <motion.div
                                className={styles.navLink}
                                whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ borderBottom: "2px solid transparent" }}
                                animate={{ borderBottom: (activeLink === 2) ? "2px solid white" : "2px solid transparent" }}
                            // onClick={() => setActiveDropdown(!activeDropdown)}
                            >
                                Dropdowns <FontAwesomeIcon icon={faCaretDown} />
                            </motion.div>

                            {/* dropdown menu  */}

                            <ul className={styles.dropdownMenu2}>
                                {dropdownItems2.map(({ id, link, href }) => (
                                    <li key={id}>
                                        <Link href={href}>
                                            <motion.div
                                                className={styles.navLink}
                                                whileHover={{ color: 'rgb(126,125,124)' }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleDropdownItemClick(id, href)}
                                            >
                                                {link}
                                            </motion.div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
