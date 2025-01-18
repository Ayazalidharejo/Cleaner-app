import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import image from "../../assets/services.webp";

const Servicehero = () => {
  return (
    <div className="container-fluid p-0">
      <div
        className="row align-items-center bg-cover bg-center text-white"
        style={{
            backgroundImage: `url(${image})`,
          minHeight: "400px",
          width: "100%",
        }}
      >
        <div className="col-lg-6 col-md-6 col-sm-12 text-start p-5" >
          <h1 className="text-4xl font-bold mb-3">We Always Provide<br />The Best Service</h1>
          <p className="text-green-700 text-4xl font-bold mb-2">Service</p>
          <p className="text-white text-xl">
            While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicehero;
