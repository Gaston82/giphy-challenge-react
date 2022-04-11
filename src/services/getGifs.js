const API_KEY = "8vG6z2FesxcljPGMEGNRT0hP79exFH21";
export async function getGifs(search) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=10&offset=0&rating=g&lang=en`;
  try {
    const response = await fetch(URL);
    const { data } = await response.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        name: gif.title,
        image: gif.images.downsized_medium.url,
      };
    });
    // console.log(gifs);
    return gifs;
  } catch (error) {
    console.log(error.message);
  }
}
//id,title,image,downsized_medium.url

export function getData(search) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=10&offset=0&rating=g&lang=en`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.table("getdata", data.data));
}

// export function getTrendingGifs() {
//   // https://api.giphy.com/v1/gifs/trending?api_key=8vG6z2FesxcljPGMEGNRT0hP79exFH21&limit=25&rating=g
//   const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&rating=g`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.data));
// }

export async function getTrendingGifs() {
  try {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&rating=g`;
    const response = await fetch(url);
    const { data } = await response.json();
    const trendingGifs = data.map((gif) => {
      return {
        id: gif.id,
        name: gif.title,
        image: gif.images.downsized_medium.url,
      };
    });
    return trendingGifs;
  } catch (error) {
    console.log(error.message);
  }
  // console.log(data.data);
}
