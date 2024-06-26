import React from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">
            Subscribe to our HealthCare.com
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Type here..."
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full  px-3 py-3 text-sm font-semibold bg-white text-white shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border-black"
            >
              <BsArrowRight className="h-4 w-4 text-black border-solid border-black" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Company
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-center font-medium text-gray-500">
            © 2024 HealthCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
