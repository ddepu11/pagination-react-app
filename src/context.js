import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [spaceBlogs, setSpaceBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        spaceBlogs,
        setSpaceBlogs,
        blogs,
        setBlogs,
        loading,
        setLoading,
        index,
        setIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
