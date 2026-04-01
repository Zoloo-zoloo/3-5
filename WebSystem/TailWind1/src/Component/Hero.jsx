import React from "react";
import { HiStar, HiArrowRight } from "react-icons/hi";
import heroimage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:py-8 px-4">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 w-fit p-4 text-xl rounded-lg">
          <HiStar className="fill-blue-600" />
          <span>Jump start your growth</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
          We boost the growth for{" "}
          <span className="text-blue-600">
            Startup to Fortune 500
          </span>{" "}
          Companies
          <span className="ml-2 animate-pulse">⏰</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mt-6 md:w-2/3">
          Get the most accurate leads, sales people training conversations,
          tools and more - all within the same billing.
        </p>

        <div className="mt-8 flex gap-4 md:w-2/3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border-gray-300 rounded-xl"
          />
          <button className=" bg-blue-600 text-white px-8 py-4 rounded-xl text-2xl">
            <HiArrowRight/>
          </button>
        </div>
      </div>
        <div className="sm:w-full md:w-1/2 flex justify-center mt-10 items-center">
            <img src={heroimage} alt="Hero" className="w-5/6"
            />
     </div>
    </div>
  );
};

export default Hero;