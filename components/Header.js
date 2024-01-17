
'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import styles from './Navbar.module.css';
import Title from '@/public/Title.svg'

const Header = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname() || '/';

    const links = [
        { id: 1, link: "home", href: '/' },
        { id: 2, link: "About", href: '/' },
        { id: 3, link: "Service", href: '/' },
        { id: 4, link: "FormsList", href: '/' },
    ];

    // Add dropdown items
    const dropdownItems = [
        { id: 5, link: "ContactForm1", href: '/Contact1' },
        { id: 6, link: "ContactForm2", href: '/Contact2' },
        { id: 7, link: "Form1", href: '/Form1' },
        { id: 6, link: "Form2", href: '/Form2' },

    ];

    // State to track the active link and dropdown item
    const [activeLink, setActiveLink] = useState(links.find(link => link.href === pathname)?.id);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Function to handle link click
    const handleLinkClick = (id, href) => {
        setActiveLink(id);
        setNav(false);
        router.push(href);
    };

    // Function to handle dropdown item click
    const handleDropdownItemClick = (id, href) => {
        setActiveDropdown(null);
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
            <ul className={styles.navLinks}>
                {links.map(({ id, link, href }) => (
                    <li key={id}>
                        <Link href={href}>
                            <motion.div
                                className={styles.navLink}
                                whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveDropdown(activeDropdown === id ? null : id)}
                                initial={{ borderBottom: "2px solid transparent" }}
                                animate={{ borderBottom: (activeLink === id || activeDropdown === id) ? "2px solid white" : "2px solid transparent" }}
                            >
                                {link}
                            </motion.div>
                        </Link>

                        {/* Dropdown menu */}
                        {activeDropdown === id  && (
                            <ul className={styles.dropdownMenu}>
                                {dropdownItems.map(({ id, link, href }) => (
                                    <li key={id}>
                                        <Link href={href}>
                                            <motion.a
                                                className={styles.navLink}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleDropdownItemClick(id, href)}
                                            >
                                                {link}
                                            </motion.a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <span style={{ width: '120px' }} />
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
                        {links.map(({ id, link, href }) => (
                            <li key={id}>
                                <Link href={href}>
                                    <motion.a
                                        className={styles.navLink}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleLinkClick(id, href)}
                                    >
                                        {link}
                                    </motion.a>
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
