import React from "react";
// import HomeCircles from "./HomeCircles";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
// import heroImg03 from "../assets/images/hero-img03.png";
import heroVideo from "../assets/images/video.mp4";
import heroImg04 from "../assets/images/hero-img04.png";
import heroImg05 from "../assets/images/hero-img05.jpg";
import heroImg06 from "../assets/images/hero-img06.webp";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import featureImg from "../assets/images/feature-img2.png";
import faqImg from "../assets/images/faq-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";

import FaqList from "../components/Faq/FaqList";
import Testimonial01 from "../components/Testimonial/Testimonial01";
import HomeCircles from "./HomeCircles";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      {/* ===== hero section ===== */}
      <section className="hero__section pt-16 2xl:h-[800px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* ======hero content===== */}
            <div>
              <div className="lg:w-[670px]">
                <h1 className="text-3xl leading-tight text-primaryColor font-extrabold md:text-5xl md:leading-tight animate-pulse">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text-para mt-4 md:mt-6">
                 The healthcare industry aims to enhance patient outcomes through advanced technologies,
                  personalized treatments, preventive care, telemedicine, electronic health records, 
                  and continuous research, ensuring accessible and quality healthcare services for everyone.
                </p>

                <Link to='/doctors'> 
                <button className="btn mt-6 md:mt-8">
                  Request an Appointment
                </button>
                </Link>

              </div>

              {/* ======hero counter===== */}
              <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                <div>
                  <h2 className="text-3xl leading-tight lg:text-4xl lg:leading-tight font-bold text-headingColor">
                    30+
                  </h2>
                  <span className="w-24 h-2 bg-yellowColor rounded-full block mt-2"></span>
                  <p className="mt-2">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-3xl leading-tight lg:text-4xl lg:leading-tight font-bold text-headingColor">
                    15+
                  </h2>
                  <span className="w-24 h-2 bg-purpleColor rounded-full block mt-2"></span>
                  <p className="mt-2">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-3xl leading-tight lg:text-4xl lg:leading-tight font-bold text-headingColor">
                    100%
                  </h2>
                  <span className="w-24 h-2 bg-irisBlueColor rounded-full block mt-2"></span>
                  <p className="mt-2">Patient Satisfaction</p>
                </div>
              </div>
              {/* <span>
                  <HomeCircles />
                </span> */}
            </div>
            {/* ======hero image===== */}
            <div className="flex flex-col md:flex-row md:gap-8 justify-end">
              <div className="w-full md:w-1/2 ">
                <Carousel
                  infiniteLoop
                  autoPlay
                  showStatus={false}
                  showArrows={false}
                  showIndicators={false}
                  interval={2000}
                >
                  <div>
                    <img className="w-full " src={heroImg01} alt="Hero 1" />
                  </div>
                  <div>
                    <img className="w-full rounded-full" src={heroImg02} alt="Hero 1" />
                  </div>
                  <div>
                    <img className="w-full" src={heroImg04} alt="Hero 1" />
                  </div>
                  <div>
                    <img className="w-full rounded-full" src={heroImg06} alt="Hero 1" />
                  </div>
                </Carousel>
              </div>

              <div className="mt-8 md:mt-0">
                <img
                  src={heroImg05}
                  alt="Hero 2"
                  className="w-60 h-45 hover:animate-bounce mb-8 rounded-full"
                />
                <video
                  src={heroVideo}
                  autoPlay
                  controls
                
                  alt="Hero Video"
                  className="w-full h-86 rounded-md"
                 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== hero section end ===== */}
      <section>
        <div className="container mx-auto px-4">
          <div className="lg:w-[470px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 md:mt-12 lg:mt-16 text-primaryColor">
              Providing the best medical services
            </h2>
            <p className="text-base md:text-lg lg:text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              doloremque consequatur quidem?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8 lg:mt-12">
          {/* ==== single service ==== */}
          <div className="py-8 px-5 border rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="Icon 1" />
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-xl leading-9 text-headingColor font-bold ">
                Find a Doctor
              </h2>
              <p className="text-base leading-7 text-headingColor mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur accusamus quod error molestiae expedita?
              </p>
              <Link
                to="/doctors"
                className="w-11 h-11 rounded-full border-solid border-[#181A1E] mt-8 mx-auto flex items-center justify-center group hover:bg-primaryColor border hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          {/* ====== */}
          <div className="py-8 px-5 border rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="Icon 2" />
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-xl leading-9 text-headingColor font-bold">
                Find a Location
              </h2>
              <p className="text-base leading-7 text-headingColor mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur accusamus quod error molestiae expedita?
              </p>
              <Link
                to="/contact"
                className="w-11 h-11 rounded-full border-solid border-[#181A1E] mt-8 mx-auto flex items-center justify-center group hover:bg-primaryColor border hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          {/* ====== */}
          <div className="py-8 px-5 border rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="Icon 3" />
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-xl leading-9 text-headingColor font-bold">
                Book Appointment
              </h2>
              <p className="text-base leading-7 text-headingColor mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur accusamus quod error molestiae expedita?
              </p>
              <Link
                to="/doctors"
                className="w-11 h-11 rounded-full border-solid border-[#181A1E] mt-8 mx-auto flex items-center justify-center group hover:bg-primaryColor border hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ====About Section ==== */}
      <About />
      {/* =====Services Section==== */}
      <section>
        <div className="container">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[470px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primaryColor">
              Our medical services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              alias autem rem exercitationem animi fugit.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* ====featured Section ===== */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ===== featured content ==== */}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[670px] mx-auto p-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primaryColor">
                Get virtual transparent <br /> anytime, anywhere.
              </h2>
              <ul className="list-disc list-inside pl-4">
                <li className="text-base sm:text-lg lg:text-xl mt-2">
                  1. Schedule the appointment online.
                </li>
                <li className="text-base sm:text-lg lg:text-xl mt-2">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text-base sm:text-lg lg:text-xl mt-2">
                  3. View our physicians who are accepting new patients, use the
                  online Scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            {/* ======featured image ==== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      {" "}
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      {" "}
                      10:30 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellow-300 rounded py-1 px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full cursor-pointer">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]mtext-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======Doctors Section===== */}
      <section>
        <div className="container">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[470px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primaryColor">
              Our medical services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              alias autem rem exercitationem animi fugit.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* =======faq section======= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-primaryColor">
                Most questions by our beloved patients !
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* ==========testimonial section========== */}
      <Testimonial01 />
    </>
  );
};

export default Home;
