import React from "react";
import image from "../../assets/expert.png";
import image2 from "../../assets/expert2.png";
import image3 from "../../assets/expert3.png";
import icon from "../../assets/icon.png";

const ExpertTeam = () => {
  const teamMembers = [
    {
      name: "Erick Reynolds",
      description:
        "He is an expert cleaning staff member who provides thorough cleaning with precision.",
      image: image,
    },
    {
      name: "Sophia Williams",
      description:
        "A dedicated professional who ensures each space is spotless and organized professional.",
      image: image3,
    },
    {
      name: "John Doe",
      description:
        "An experienced team member with great attention to detail in cleaning professional.",
      image: image2,
    },
    // Add more members here if needed
  ];

  return (
    <div className="container  py-8">
  {/* <div className="row justify-content-center mb-8">
  <div className="row justify-content-center mb-8">
    <div className="col-12 col-md-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Effective Cleaning Requires an Expert Cleaning Team
      </h2>
      <p className="text-gray-600">
        We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.
      </p>
    </div>
  </div>
      </div> */}
     <div className="container ps-12">

     <div className="row">
     <div className="d-flex justify-content-start ps-5">
  <img className="img-fluid mr-2" src={icon} alt="Expert Team" />
</div>
<div className="col-6 text-3xl font-bold mb-4 text-center ps-4">  Effective Cleaning Requires <br /> an Expert Cleaning Team</div>

<div className="col-6  text-start">
<div className="flex items-center">
  <img className="img-fluid mr-2" src={icon} alt="Expert Team" />
  <span className="text-lg font-semibold">Expert Team</span>
</div>

  <p>We have professional expert cleaning staff ensuring <br /> top-notch cleanliness and hygiene for your space.</p>
  <div className="d-flex justify-content-end">
  <img className="img-fluid mr-2" src={icon} alt="Expert Team" />
</div>

  </div>


      </div>
     </div>
     <div className="container">
  <div className="border border-success mx-5"></div>
</div>

      <div className="row d-flex justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-lg-3 col-md-4 col-12 mb-4" key={index}>
            <div className="car shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top   mt-4 w-100 h-72"
              />
              <div className="card-body">
                <h5 className="card-title text-lg font-semibold">{member.name}</h5>
                <p className="card-text text-gray-500 py-8">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-start">
  <img className="img-fluid mr-2" src={icon} alt="Expert Team" />
</div>
    </div>
  );
};

export default ExpertTeam;
