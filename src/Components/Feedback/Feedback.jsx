import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Robert Fox",
      profession: "Business Man",
      review:
        "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommended for anyone needing a reliable and detailed cleaning service.",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-6">
        Feedback About Their Experience With Us
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Read testimonials from our satisfied clients. See how our cleaning
        services have made a difference in their lives and homes.
      </p>
      <div className="row">
        {feedbacks.map((feedback, index) => (
          <div className="col-lg-6 mx-auto" key={index}>
            <div className="bg-white rounded-md shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{feedback.name}</h3>
                  <p className="text-gray-500">{feedback.profession}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{feedback.review}</p>
              <div className="flex space-x-1">
                {Array.from({ length: feedback.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
