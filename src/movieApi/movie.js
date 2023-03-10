import axios from "axios";

export function getHeaderImage() {
  let random = Math.floor(Math.random() * 100) + 1;
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&include_adult=false&page=${random}`
  );
}

export function getMoviesByCategory(url) {
  return axios.get(url);
}
