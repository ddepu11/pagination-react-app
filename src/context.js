import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [spaceBlogs, setSpaceBlogs] = useState([]);
  return (
    <AppContext.Provider value={{ spaceBlogs, setSpaceBlogs }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
