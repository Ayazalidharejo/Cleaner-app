import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import Service from "../../assets/cleaner.jpg"
import deep from "../../assets/deep.png"
import deep2 from "../../assets/deep2.png"
import deep3 from "../../assets/deep3.png"
import deep4 from "../../assets/deep4.png"
import deep5 from "../../assets/deep5.png"
import deep6 from "../../assets/deep6.png"
import icon from "../../assets/icon.png";

const ServicesSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={Service}
              alt="Cleaning Services"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold mt-5">Cleaning Services</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className=" p-3 rounded-full">
                {/* <i className="fas fa-broom text-green-600 text-2xl"></i> */}
                <img src={deep} alt="img" />

              </div>
              <p className="mt-2 font-semibold">Deep Cleaning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" p-3 rounded-full">
               
                <img src={deep2} alt="img" />
              </div>
              <p className="mt-2 font-semibold">Kitchen Cleaning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" p-3 rounded-full">
               
                <img src={deep3} alt="img" />
              </div>
              <p className="mt-2 font-semibold">Office Cleaning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" p-3 rounded-full">
              
                <img src={deep4} alt="img" />
              </div>
              <p className="mt-2 font-semibold">Shop Cleaning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" p-3 rounded-full">
            
                <img src={deep5} alt="img" />
              </div>
              <p className="mt-2 font-semibold">Carpet & Upholstery</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" p-3 rounded-full">
             
                <img src={deep6} alt="img" />
              </div>
              <p className="mt-2 font-semibold">Restaurant Cleaning</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="bg-green-600 text-white py-2 mt-4 px-20 rounded-5 hover:bg-green-700 transition">See All</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
  <div className="grid grid-cols-12 gap-4 mt-5 text-center">
   <h3 className="col-span-12 sm:col-span-6 fw-bold text-4xl text-start ms-5 py-3">
   Explore the Best <br /> Plans for Services
   </h3>
   <div className="col-span-12 sm:col-span-6 pt-4">
    <div className="d-flex items-center"> <img src={icon} alt="" />  <h3 className="text-start ms-3 text-xl font-bold">  Pricing Table</h3></div>
   <p className="text-start " >
   Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore 
   </p>
   </div>
  
 </div>
 <div className="border border-success">
 
 </div>
</div>

    </section>
  );
};

export default ServicesSection;