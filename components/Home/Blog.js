import React, { useEffect } from "react";
import Image from "next/image";
import underline from "../../asset/Images/underline.png";
import bankless from "../../asset/Images/bankless.png";
import Carousel from "../Carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="10000"
      className=" items-center justify-center py-16 px-16 bg-black md:flex-row"
    >
    <div className="mb-3 text-3xl font-bold text-center text-white">
        <p>Blog</p>
        <div className="mb-14">
        <Image src={underline} alt="" className="" />
      </div>
      </div>
     
      <div className=" ">
          <Carousel />
      </div>
    
    </div>
  );
};

export default Blog;
