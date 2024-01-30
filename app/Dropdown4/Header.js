'use client'

import { useState, createContext, useContext } from "react";
import { UserContext } from "../Context/userContext";


export default function Header() {

    const value= useContext(UserContext);



  return (
    <div>

 <h1>backgroundColor: {value.selectedItem || ''}</h1>
          <h2>borderColor: {value.selectedBorder || ''}</h2> 
    </div>
  )
}
