import { useEffect } from "react";

const useFetch = (url) => {
  const getCats = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getCats(), []);
};

export { useFetch };
