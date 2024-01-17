'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const page = () => {
    const [shown, setShown] = useState(false);
  
    const showMenu = {
      enter: {
        opacity: 1,
        y: 0,
        display: "block",
      },
      exit: {
        y: -5,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
        
      },
    };
    return (
      <motion.div
        onHoverStart={() => setShown(true)}
        onHoverEnd={() => setShown(false)}
      >
        <div>
            <h1>List of Contact Forms </h1>
        </div>
        <span className="cursor-pointer">Sections</span>
        <motion.ul
          variants={showMenu}
          initial="exit"
          animate={shown ? "enter" : "exit"}
          className="absolute bg-white mt-1 border border-blue-strong border-opacity-50 rounded-sm p-2"
        >
          <Link href="/Contact1">
            <motion.li
              whileHover={{
                color: "#FFB703",
                x: 2,
              }}
              className="cursor-pointer p-1 text-blue-primary"
            >
              Introduction
            </motion.li>
          </Link>
  
          <Link href="/html">
            <motion.li
              whileHover={{
                color: "#FFB703",
                x: 2,
              }}
              className="cursor-pointer p-1 text-blue-primary"
            >
              HTML
            </motion.li>
          </Link>
  
          <motion.li
            whileHover={{
              color: "#FFB703",
              x: 2,
            }}
            className="cursor-pointer p-1 text-blue-primary"
          >
            CSS
          </motion.li>
          <motion.li
            whileHover={{
              color: "#FFB703",
              x: 2,
            }}
            className="cursor-pointer p-1 text-blue-primary"
          >
            JAVASCRIPT
          </motion.li>
        </motion.ul>
      </motion.div>
    );
  };

  export default page;