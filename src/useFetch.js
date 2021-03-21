import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useFetch = (url) => {
  const { setSpaceBlogs, setLoading } = useGlobalContext();

  const getCats = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setSpaceBlogs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setSpaceBlogs([]);
    }
  };

  useEffect(() => getCats(), []);
};

export { useFetch };
