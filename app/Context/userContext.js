import { createContext, useState } from 'react';



export const UserContext = createContext();

 export const UserContextProvider = ( {children}) => {

    
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBorder, setSelectedBorder] = useState('black');

  const handleItemClick = (item) => {
    setSelectedBorder(selectedItem);
    setSelectedItem(item);
    setIsOpen(false);
  };


    const value = {selectedItem, selectedBorder, isOpen, setIsOpen, handleItemClick}
return (

    <UserContext.Provider  value={value}>
{children}
    </UserContext.Provider>
)

 }




