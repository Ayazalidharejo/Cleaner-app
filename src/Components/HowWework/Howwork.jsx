import React from 'react';


import image from "../../assets/work.png";
import image1 from "../../assets/work1.png";
import image2 from "../../assets/work2.png";
import path2 from "../../assets/path.png";

const Howwork = () => {
  return (
    <div className="container py-5 px-20">
      <div className="row justify-content-center">
       <div className='ms-16'>
       <span>Explore our seamless process</span>
       <h2 className='text-xl font-bold mb-4'>How it works</h2>
       </div>
        {/* First Column (for the first two images) */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="relative  flex flex-column items-center">
            <img className="w-56 " src={image1} alt="" />
            <img className="w-64 absolute top-20 left-52" src={path2} alt="" />
           <div className='pt-3'>
           <h3 className='font-bold text-green-600'>Book</h3>
            <p>Tell us when and where you want <br />
            your cleaning.</p>
           </div>
          </div>
        </div>

        {/* Second Column (for the second two images) */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="relative  flex flex-column items-center">
            <img className="w-56" src={image2} alt="" />
            <img className="w-64 absolute top-20 left-52 " src={path2} alt="" />
           <div className='pt-3'>
           <span className='font-bold text-green-600'>Clean</span>
           <p>A Professional cleaner comes over <br /> and cleans your place.</p>
           </div>
          </div>
        </div>

        {/* Third Column (for the single image) */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4  ">
          <div className='flex flex-column items-center'>
            <img className="w-52" src={image} alt="" />
           <div className='pt-3'>
           <span className='font-bold text-green-600'>Enjoy</span>
            <p>Enjoy your life and come back <br />
            to a clean space!.</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howwork;
