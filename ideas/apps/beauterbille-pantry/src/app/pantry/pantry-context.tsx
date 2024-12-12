import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { PantryApi } from '../api/pantry-api';

interface PantryContextProps {
  stock: string[];
  addStock: (item: string) => void;
}

const PantryContext = createContext<PantryContextProps | undefined>(undefined);

export const PantryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [stock, setStock] = useState<string[]>([]);
  const api = new PantryApi();

  useEffect(() => {
    const fetchStock = async () => {
      const stock = await api.getPantry();
      setStock(stock.data.map((item) => item.name));
    };
    fetchStock();
  }, []);

  const addStock = async (item: string) => {
    setStock([...stock, item]);
    console.log(item);
    await api.addItem({ name: item });
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
