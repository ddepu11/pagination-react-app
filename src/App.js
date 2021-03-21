import "./App.css";
import { useEffect } from "react";
import { useFetch } from "./useFetch";
import { useGlobalContext } from "./context";
import Cards from "./Cards.jsx";
import Pagination from "./Pagination.jsx";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const API_URL = `https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=100`;

function App() {
  useFetch(API_URL);
  const {
    spaceBlogs,
    setBlogs,
    blogs,
    loading,
    index,
    setIndex,
  } = useGlobalContext();

  function createSubArray() {
    const itemsToShowInOneWay = 9;
    const innerArrayLength = Math.ceil(spaceBlogs.length / itemsToShowInOneWay);

    const newBlogs = Array.from({ length: innerArrayLength }, (item, index) => {
      let start = index * itemsToShowInOneWay;
      let end = start + itemsToShowInOneWay;
      return spaceBlogs.slice(start, end);
    });

    setBlogs(newBlogs);
    console.log(newBlogs);
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

  function prev() {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }

  function next() {
    if (index < 11) {
      setIndex(index + 1);
    }

    console.log(typeof index);
  }
  
  return (
    <div className="container ">
      <div className="grid">{loading ? <h1>Loading...</h1> : showBlogs}</div>
      <div className="flex buttons">
        <FaAngleDoubleLeft className="arrow" onClick={prev} />
        {!loading && showButtons}
        <FaAngleDoubleRight className="arrow" onClick={next} />
      </div>
    </div>
  );
}

export default App;
