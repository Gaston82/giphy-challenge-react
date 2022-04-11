import { useEffect, useState } from "react";
import "./App.css";
import Gift from "./components/gift";
import SearchBox from "./components/searchBox";
import { getGifs, getTrendingGifs } from "./services/getGifs";

function App() {
  const [query, setQuery] = useState("maradona");
  const [listOfGifs, setListOfGifs] = useState([]);
  const [trendingGifs, setTrendingGifs] = useState([]);

  // useEffect(() => {
  //   const fetchGifs = async () => {
  //     const result = await getGifs(query);
  //     setListOfGifs(result);
  //   };

  //   fetchGifs();
  // }, [query]);

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      const result = await getTrendingGifs();
      setTrendingGifs(result);
    };
    fetchTrendingGifs();
  }, []);

  return (
    // <div className="App">
    //   <SearchBox setQuery={setQuery} />
    //   {listOfGifs.map((gif) => (
    //     <Gift key={gif.id} name={gif.name} image={gif.image} />
    //   ))}
    // </div>
    <div className="App">
      <SearchBox setQuery={setQuery} />
      {trendingGifs.map((gif) => (
        <Gift key={gif.id} name={gif.name} image={gif.image} />
      ))}
    </div>
  );
}

export default App;
