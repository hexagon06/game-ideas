import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PantryContextProps {
  stock: string[];
  addStock: (item: string) => void;
}

const PantryContext = createContext<PantryContextProps | undefined>(undefined);

export const PantryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stock, setStock] = useState<string[]>([]);

  const addStock = (item: string) => {
    setStock([...stock, item]);
  };

  return (
    <PantryContext.Provider value={{ stock, addStock }}>
      {children}
    </PantryContext.Provider>
  );
};

export const usePantry = () => {
  const context = useContext(PantryContext);
  if (!context) {
    throw new Error('usePantry must be used within a PantryProvider');
  }
  return context;
};