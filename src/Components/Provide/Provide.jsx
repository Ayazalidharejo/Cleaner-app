import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import brush from "../../assets/brush.png";
import green from "../../assets/green.png";
import spry from "../../assets/spry.png";
import icon from "../../assets/icon.png";
import { Icon } from "@iconify/react";


const CleaningSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section: Images */}
        <div className="col-md-6 relative">
          {/* Main Image */}
          <img
            src={brush}
            alt="Main Cleaning Service"
            className="img-fluid rounded  w-75 ms-5"
          />
          {/* Top Small Image */}
         <div className=" border-green-500 bg-white ">
         <img
            src={spry}
            alt="Secondary Cleaning Service 1"
            className="absolute left-2.5 top-12 img-fluid rounded  bg-white border border-white shadow border-2 border-green-500 p-2 "
            style={{ width: "160px",height:"200px" }}
          />
         </div>
          {/* Bottom Small Image */}
          <img
            src={green}
            alt="Secondary Cleaning Service 2"
            className="absolute right-10 top-80 mt-2 img-fluid rounded  bg-white border border-white shadow border-2 border-green-500 p-2"
            style={{ width: "160px",height:"200px" }}
          />
        </div>

        {/* Right Section: Content */}
        <div className="col-md-6">
        <h2 className="flex items-center text-success font-bold">
  <img src={icon} alt="icon" className="mr-3 mt-1" /> 
  We Provide Experienced Cleaning Services
</h2>

<p className="flex items-start text-muted">
 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tincidunt tempor, incidunt ut labore.
</p>

          <div className="mt-4">
            {/* Feature 1 */}
            <div className="d-flex align-items-start mb-3">
              <div className="text-success ">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
              <h5 className="flex items-cente fw-bold  ">
  <Icon className="mr-2 mt-1 me-3 text-2xl text-green-500" icon="teenyicons:tick-circle-outline" />
  We are Committed
</h5>

                <p className="text-muted ms-4 ps-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="d-flex align-items-start mb-3">
              <div className="text-success ">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
                <h5 className="flex items-center fw-bold">
  <Icon className="mr-2 mt-1 me-3 text-2xl text-green-500" icon="teenyicons:tick-circle-outline" />

  Trusted Professionals</h5>
                <p className="text-muted ms-3 ps-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  please gate it hope you well be happy 
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="d-flex align-items-start mb-3">
              <div className="text-success ">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
               <h5 className="flex items-Start fw-bold">
  <Icon className="mr-2 mt-1 me-3 text-2xl text-green-500" icon="teenyicons:tick-circle-outline" />
 
  Highly Rated Cleaning</h5>
                <p className="text-muted ms-3 ps-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="grid grid-cols-12 gap-4 mt-5 text-center">
  <h3 className="col-span-12 sm:col-span-6 fw-bold text-4xl text-start ms-5 py-3">
    We Always Provide The 
   <br /> Best Service
  </h3>
  <div className="col-span-12 sm:col-span-6 ">
   <div className="d-flex items-center"> <img src={icon} alt="" />  <h3 className="text-start ms-3 text-xl font-bold">  Service</h3></div>
  <p className="text-start pt-3" >
    While we can customize your cleaning plan to suit your needs, most
    clients schedule regular cleaning services.
  </p>
  </div>
 
</div>
<div className="border border-success">

</div>

    </div>
  );
};

export default CleaningSection;
