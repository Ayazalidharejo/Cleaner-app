import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "BOOK",
      description: "Tell us when and where you want your cleaning.",
      icon: "📅", // Replace with an actual icon if you have one
    },
    {
      title: "CLEAN",
      description:
        "A professional cleaner comes over and cleans your place.",
      icon: "🧹",
    },
    {
      title: "ENJOY",
      description: "Enjoy your life and come back to a clean space.",
      icon: "😊",
    },
  ];

  return (
    <div className="container mx-auto py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-6">
        Explore Our Seamless Process
      </h2>
      <div className="row">
        {steps.map((step, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="bg-white rounded-md shadow-md p-6 text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
