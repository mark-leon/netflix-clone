import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import imdb from "../../assets/imdb_logo.png";
import { getHeaderImage } from "../../movieApi/movie";
import "./header.css";

const Header = () => {
  const [sliderImage, setSliderImage] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 20);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const fetchData = () => {
    getHeaderImage()
      .then((res) => {
        setSliderImage(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      {sliderImage && (
        <div class="container">
          <div
            class="animate"
            style={{
              background: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 60%), `,
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${sliderImage[index].backdrop_path}`}
              alt="Snow"
            />
          </div>

          <div class="top-left">
            <h1>{sliderImage[index].title}</h1>

            <div style={{ display: "flex" }}>
              <img src={imdb} style={{ width: "46px", height: "22px" }}></img>
              <span style={{ margin: "0.2rem 0rem 0rem 0.5rem" }}>
                {sliderImage[index].vote_average}
              </span>
            </div>

            <p>Realease Date: {sliderImage[index].release_date}</p>
            <p style={{ width: "40%" }}>{sliderImage[index].overview}</p>

            <Button
              style={{
                background: "#fafafa",
                color: "#000000",
                width: "150px",
                height: "50px",
                marginTop: "26px",
              }}
            >
              <PlayArrowIcon style={{ marginRight: "0.5rem" }}></PlayArrowIcon>
              Play
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
