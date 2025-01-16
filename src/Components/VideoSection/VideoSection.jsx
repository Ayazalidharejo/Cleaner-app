import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import image from "../../assets/brush2.png"
import image2 from "../../assets/brush3.png"
import icon from "../../assets/icon.png"

const HeroSection = () => {
  return (
    <section className="container py-5 mb-32">
             <div className=' flex items-center justify-center  ps-5 pb-3'>


<img  src={icon} alt="" />
</div> 
      <div className="row align-items-center">
        <div className="col-md-6">
        <div className=' flex items-start justify-start  ps-5 pb-3'>


<img  src={icon} alt="" />
</div>
          <p className="text-green-600 text-sm font-semibold mb-2">Affordable cleaning solutions</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">High-Quality and Friendly Services at Fair Prices</h1>
          <p className="text-gray-600 mb-4">
            We provide comprehensive cleaning services tailored to your needs. From residential Affordable cleaning  cleaning services to specialized cleaning solutions, we’ve got you covered.
          </p>
         <div className=' flex items-center justify-center my-3'>


         <img  src={icon} alt="" />
         </div>
          <div className="flex space-x-3">
            <button className=" text-green-600 py-2 px-16 rounded-5 border-2 border-green-600  transition">Book Now</button>
            <button className="text-white bg-green-600  text-green-600 py-2 px-16 rounded-5 hover:bg-green-600 hover:text-white transition">Get a Quote</button>
          </div>
        </div>
        <div className="col-md-6 relative ">
        <div className="grid   ">

<div className='h-81 w-90'>

<img
    src={image}
    alt="Cleaning in action"
    className="rounded-lg shadow-md w-100 ps-5 h-100 p-1 "
  />
</div>
  <div className='mt-5 '>
  <img
    src={image2}
    alt="Cleaning service"
    className="rounded-5 shadow-md  h-auto bg-white top-1/2 mt-5 right-45  absolute "
  />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Play the video when at least 50% is visible
    });

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="relative shadow-md rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4" // Example professional video
                className="w-full h-auto rounded-lg cursor-pointer"
                muted
                loop
              ></video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-4.596 2.664A1 1 0 019 12.897V9.103a1 1 0 011.156-.986l4.596 2.664a1 1 0 010 1.742z"
                    />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Video = () => {
  return (
    <div>
      <HeroSection />
      <VideoSection />
    </div>
  );
};

export default Video;
