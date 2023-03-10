import React from "react";
import List from "../list/List";

const MovieList = () => {
  const movies = {
    upcoming: {
      apiCall: "upcoming",
      header: "Upcoming",
    },
    thriller: {
      apiCall: 53,
      header: "Thriller",
    },
    topRated: {
      apiCall: "top_rated",
      header: "Top Rated",
    },
    action: {
      apiCall: 28,
      header: "Action",
    },
    adventure: {
      apiCall: 12,
      header: "Adventure",
    },
    animation: {
      apiCall: 16,
      header: "Animation",
    },
    comedy: {
      apiCall: 35,
      header: "Comedy",
    },
    crime: {
      apiCall: 80,
      header: "Crime",
    },
    mystery: {
      apiCall: 878,
      header: "Science Fiction",
    },
    horror: {
      apiCall: 27,
      header: "Horror",
    },
    documentary: {
      apiCall: 99,
      header: "Documentary",
    },
  };

  return (
    <div>
      {Object.keys(movies).map((item, i) => (
        <div key={i}>
          <List
            header={movies[item].header}
            apiCall={movies[item].apiCall}
          ></List>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
