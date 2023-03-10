import { Skeleton } from "@mui/material";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./singleMovie.css";

const SingleMovie = (props) => {
  const { singleItem, loading } = props;
  return (
    <>
      <Swiper
        autoHeight={true}
        slidesPerView={5}
        spaceBetween={2}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {!loading ? (
          <>
            {singleItem?.map((data) => {
              return (
                <SwiperSlide>
                  <div className="zoom">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                      style={{ width: "300px", height: "180px" }}
                    ></img>
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        ) : (
          <SwiperSlide>
            <Skeleton variant="rectangular">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default SingleMovie;
