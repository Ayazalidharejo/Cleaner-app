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
        <div className="col-md-6 position-relative">
          {/* Main Image */}
          <img
            src={brush}
            alt="Main Cleaning Service"
            className="img-fluid rounded shadow"
          />
          {/* Top Small Image */}
          <img
            src={spry}
            alt="Secondary Cleaning Service 1"
            className="position-absolute top-0 start-50 translate-middle img-fluid rounded border border-white shadow"
            style={{ width: "120px" }}
          />
          {/* Bottom Small Image */}
          <img
            src={green}
            alt="Secondary Cleaning Service 2"
            className="position-absolute bottom-0 start-25 translate-middle-y img-fluid rounded border border-white shadow"
            style={{ width: "120px" }}
          />
        </div>

        {/* Right Section: Content */}
        <div className="col-md-6">
        <h2 className="flex items-start text-success font-bold">
  <img src={icon} alt="icon" className="mr-3 mt-2" /> 
  We Provide Experienced Cleaning Services
</h2>

<p className="flex items-start text-muted">
 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tincidunt tempor, incidunt ut labore.
</p>

          <div className="mt-4">
            {/* Feature 1 */}
            <div className="d-flex align-items-start mb-3">
              <div className="text-success me-3">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
              <h5 className="flex items-center fw-bold">
  <Icon className="mr-2 mt-1" icon="teenyicons:tick-circle-outline" />
  We are Committed
</h5>

                <p className="text-muted m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="d-flex align-items-start mb-3">
              <div className="text-success me-3">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
                <h5 className="flex items-center fw-bold">
  <Icon className="mr-2 mt-1" icon="teenyicons:tick-circle-outline" />

  Trusted Professionals</h5>
                <p className="text-muted m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="d-flex align-items-start mb-3">
              <div className="text-success me-3">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
               <h5 className="flex items-Start fw-bold">
  <Icon className="mr-2 mt-1" icon="teenyicons:tick-circle-outline" />
 
  Highly Rated Cleaning</h5>
                <p className="text-muted m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold">
          We Always Provide The Best Service
        </h3>
        <p className="text-muted">
          While we can customize your cleaning plan to suit your needs, most
          clients schedule regular cleaning services.
        </p>
      </div>
    </div>
  );
};

export default CleaningSection;
