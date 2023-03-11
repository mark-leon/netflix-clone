import React from "react";
import Header from "../../components/header/Header";
import MovieList from "../../components/movieList/MovieList";
import Navbar from "../../components/navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />;
      <MovieList />
    </div>
  );
};

export default Homepage;
