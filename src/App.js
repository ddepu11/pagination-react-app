import "./App.css";
import { useFetch } from "./useFetch";
import { useGlobalContext } from "./context";
import Cards from "./Cards.jsx";

const API_URL = `https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=100`;

function App() {
  useFetch(API_URL);
  const { spaceBlogs } = useGlobalContext();

  return (
    <div className="container">
      {spaceBlogs.map((item, index) => {
        return <Cards key={index} {...item} />;
      })}
    </div>
  );
}

export default App;
