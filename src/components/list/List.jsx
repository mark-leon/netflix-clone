import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../../movieApi/movie";
import SingleMovie from "../singleMovie/SingleMovie";

const List = (props) => {
  const { header, apiCall } = props;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMovie();
  }, []);
  const fetchMovie = () => {
    setLoading(true);
    let random = Math.floor(Math.random() * 100) + 1;
    let url = "";
    if (typeof apiCall === "number") {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=${apiCall}&page=${random}&include_adult=false`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${apiCall}?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&page=1&include_adult=false`;
    }
    getMoviesByCategory(url)
      .then((res) => {
        let data = res.data.results;
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "2rem 1rem 0rem 2rem" }}>
      <h1 style={{ color: "#fafafa" }}>{header}</h1>
      <SingleMovie singleItem={movies} loading={loading}></SingleMovie>
    </div>
  );
};

export default List;
