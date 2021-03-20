import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useFetch = (url) => {
  const { setSpaceBlogs } = useGlobalContext();

  const getCats = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);

      setSpaceBlogs(data);
    } catch (error) {
      console.log(error);
      setSpaceBlogs([]);
    }
  };

  useEffect(() => getCats(), []);
};

export { useFetch };
