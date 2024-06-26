import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import pattientAvtar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[50px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={pattientAvtar} alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Sahanur Alam
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, quos voluptates. Animi voluptatibus explicabo
              architecto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={pattientAvtar} alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Kohinur Parvin
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, quos voluptates. Animi voluptatibus explicabo
              architecto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={pattientAvtar} alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Nurul Islam
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, quos voluptates. Animi voluptatibus explicabo
              architecto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={pattientAvtar} alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Md Kaif Ali
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, quos voluptates. Animi voluptatibus explicabo
              architecto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={pattientAvtar} alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  MD Rafiqul Islam
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, quos voluptates. Animi voluptatibus explicabo
              architecto.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
