import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/searchBox";
import { getGifs } from "./services/getGifs";

function App() {
  const [query, setQuery] = useState("maradona");
  const [listOfGifs, setListOfGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const result = await getGifs(query);
      setListOfGifs(result);
    };

    fetchGifs();
  }, [query]);

  return (
    <div className="App">
      <SearchBox setQuery={setQuery} />
      {listOfGifs.map((gif) => (
        <article key={gif.id}>
          <p style={{ color: "#5FD6F7" }}>{gif.name}</p>
          <img src={gif.image} alt={gif.name} />
        </article>
      ))}
    </div>
  );
}

export default App;
