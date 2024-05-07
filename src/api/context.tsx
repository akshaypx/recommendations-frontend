import { createContext, useState } from 'react';
interface MyContextData {
  value: string;
  updateValue: (newValue: string) => void;
}
export const LocationContext = createContext<MyContextData | undefined>(undefined);

export const MyLocationProvider = ({ children }: any) => {
  const [value, setValue] = useState<string>('Alaska');
  const updateValue = (newValue: string) => {
    console.log(newValue, 'from context changed');
    setValue(newValue);
  };
  return (
    <LocationContext.Provider value={{ value, updateValue }}>{children}</LocationContext.Provider>
  );
};
