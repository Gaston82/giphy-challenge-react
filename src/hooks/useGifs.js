import { useEffect, useState } from "react";
import { getTrendingGifs } from "../services/getGifs";

export default function useGifs() {
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      const result = await getTrendingGifs();
      setTrendingGifs(result);
    };
    fetchTrendingGifs();
  }, []);

  return trendingGifs;
}
