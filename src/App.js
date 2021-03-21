import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./useFetch";
import { useGlobalContext } from "./context";
import Cards from "./Cards.jsx";
import Pagination from "./Pagination.jsx";

const API_URL = `https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=100`;

function App() {
  useFetch(API_URL);
  const { spaceBlogs, setBlogs, blogs, loading, index } = useGlobalContext();

  function createSubArray() {
    const itemsToShowInOneWay = 9;
    const innerArrayLength = Math.ceil(spaceBlogs.length / itemsToShowInOneWay);

    const newBlogs = Array.from({ length: innerArrayLength }, (item, index) => {
      let start = index * itemsToShowInOneWay;
      let end = start + itemsToShowInOneWay;
      return spaceBlogs.slice(start, end);
    });

    setBlogs(newBlogs);
  }

  useEffect(() => {
    createSubArray();
  }, [loading]);

  const showBlogs =
    blogs.length !== 0
      ? blogs[index].map((item, index) => {
          return <Cards key={index} {...item} />;
        })
      : "";
  const showButtons =
    blogs.length !== 0
      ? blogs.map((item, index) => {
          return <Pagination key={index} index={index} />;
        })
      : "";
  return (
    <div className="container ">
      <div className="grid">{loading ? <h1>Loading...</h1> : showBlogs}</div>
      <div className="flex buttons">{!loading && showButtons}</div>
    </div>
  );
}

export default App;
