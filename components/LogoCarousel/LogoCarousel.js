import { SwiperImage } from "../SwiperImage";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { data } from "../LogoCarousel/logo_data";

const LogoCarousel = () => {
  return (
    <div className="bg-blue-300">
      <h2 className=" mb-2 pt-10 text-4xl text-center text-white font-bold">Zaufali mi:</h2>
      <Swiper
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Autoplay, Pagination]}
        speed={5000}
        className="bg-blue-300"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="text-sm text-center h-9 mt-10 mb-20">
            <a href={`${item.url}`} target="_blank" className="cursor-pointer">
              <SwiperImage itemLogo={item.logo} />
              <h2 className="mt-3">{item.title}</h2>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
