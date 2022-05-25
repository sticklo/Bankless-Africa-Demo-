import React from "react";
import blogimg from "../../asset/Images/blogimg.png";
import Arrow from "../../asset/Images/Arrow.png";

// Import Swiper React components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.module.css";




export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className=""
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <div className="flex flex-col justify-center items-center lg:flex-row">
            
                <img
                  src={blogimg.src}
                  alt="blog image"
                  className="max-w-full  h-auto"
                />
            
            <div className="flex flex-col gap-4 justify-center pl-[4rem] bg-white text-black h-[23.125rem]  lg:rounded-r-2xl lg:rounded-b-2xl">
              <h1 className="text-4xl font-bold leading-[44px]">
                31 COMMON WORDS USED IN CRYPTOCURRENCY: PART 3 of 3
              </h1>
              <p className="max-w-[513px] text-lg font-normal leading-6 text-[#303030]">
                Let’s refresh our cognitive memory and get familiar with these
                buzzwords that are sweeping through the crypto ecosystem making
                headlines day in and day out.
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#FF0000] font-bold">Read more</p>
                <img src={Arrow.src} alt="arrow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <img
              src={blogimg.src}
              alt="blog image"
              className="max-w-full h-auto"
            />
            <div className="flex flex-col gap-4 justify-center pl-[4rem] bg-white text-black h-[23.125rem]">
              <h1 className="text-4xl font-bold leading-[44px] rounder-br-2xl rounder-tr-2xl">
                31 COMMON WORDS USED IN CRYPTOCURRENCY: PART 3 of 3
              </h1>
              <p className="max-w-[513px] text-lg font-normal leading-6 text-[#303030]">
                Let’s refresh our cognitive memory and get familiar with these
                buzzwords that are sweeping through the crypto ecosystem making
                headlines day in and day out.
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#FF0000] font-bold">Read more</p>
                <img src={Arrow.src} alt="arrow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <img
              src={blogimg.src}
              alt="blog image"
              className="max-w-full h-auto"
            />
            <div className="flex flex-col gap-4 justify-center pl-[4rem] bg-white text-black h-[23.125rem]">
              <h1 className="text-4xl font-bold leading-[44px]">
                31 COMMON WORDS USED IN CRYPTOCURRENCY: PART 3 of 3
              </h1>
              <p className="max-w-[513px] text-lg font-normal leading-6 text-[#303030]">
                Let’s refresh our cognitive memory and get familiar with these
                buzzwords that are sweeping through the crypto ecosystem making
                headlines day in and day out.
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#FF0000]">Read more</p>
                <img src={Arrow.src} alt="arrow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
}
