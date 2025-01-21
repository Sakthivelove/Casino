import React, { createContext, useContext, useState } from 'react';

// Define the context
const MenuContext = createContext<{ selectedMenu: string; setSelectedMenu: (menu: string) => void } | undefined>(undefined);

// Provider Component to wrap the App or specific part of your app
export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("Casino");

  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook to use the context in other components
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
