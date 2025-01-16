import React from "react";
import heroImage from "../../assets/hero.png";
import { Outlet } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "500px",  // Adjust height as needed
    }}
  >
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-24 px-6">
        <div className="lg:w-1/2">
        <span className="text-xl font-normal text-gray-800 ">
        Quality cleaning at a fair price.
          </span>
          <h1 className="text-4xl font-bold text-gray-800">
            Quick and Reliable Cleaning Solutions
          </h1>
          <p className="text-lg text-gray-600 mt-4">
          Expert Cleaning & Transport Services, Tailored to Your Needs
          </p>
          <div className="mt-6">
            <button className=" text-green-500 py-2 px-12 rounded-full mr-4 hover:bg-green-600 font-bold  border-2 border-green-500">
              Book Now
            </button>
            <button className="bg-green-500 text-white-700 py-2 px-12 rounded-full hover:bg-green-300 font-bold">
              Get a Quote
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        
        </div>
      </div>
      <Outlet/>
    </section>
  );
};

export default HeroSection;
