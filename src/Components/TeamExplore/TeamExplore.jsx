import React from "react";

const ExpertTeam = () => {
  const teamMembers = [
    {
      name: "Erick Reynolds",
      description:
        "He is an expert cleaning staff member who provides thorough cleaning with precision.",
      image: "https://via.placeholder.com/150",
    },
    // Add more members here if needed
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-4">
        Effective Cleaning Requires an Expert Cleaning Team
      </h2>
      <p className="text-gray-600 text-center mb-8">
        We have professional expert cleaning staff ensuring top-notch
        cleanliness and hygiene for your space.
      </p>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
