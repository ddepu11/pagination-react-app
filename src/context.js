import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  return (
    <AppContext.Provider value={{ cats, setCats }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
