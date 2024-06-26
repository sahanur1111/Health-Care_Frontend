import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ====about img==== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ====about content==== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-primaryColor">
              Proud to be one of the leading healthcare providers
            </h2>
            <p className="text-base lg:text-lg mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              asperiores, assumenda cumque laboriosam suscipit a placeat dicta.
              Distinctio, suscipit eius?
            </p>
            <p className="text-base lg:text-lg mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              asperiores, assumenda cumque laboriosam suscipit a placeat dicta.
              Distinctio, suscipit eius?
            </p>
            <Link to="/">
              <button className="btn mt-4 lg:mt-8 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
