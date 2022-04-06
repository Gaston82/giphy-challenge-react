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
