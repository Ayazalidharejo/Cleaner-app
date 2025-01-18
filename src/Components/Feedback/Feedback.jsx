import React, { useState } from "react";
import man from "../../assets/ayaz.png";


const testimonials = [
  {
    name: "Feedback About Their Experience With Us",
    Name: "Ayaz Ali",
    image: man,
    role: "Teacher",
   
      feedback:
      "Amazing team! They exceeded my expectations with their attention to detail and professionalism. Truly exceptional service.",
      
  },
  {
    Name: "Jane Cooper",
    role: "Designer",
    image: man,
    feedback:
      "Amazing team! They exceeded my expectations with their attention to detail and professionalism. Truly exceptional service.",
  },
  {
    Name: "John Doe",
    role: "Engineer",
    image: man,
    feedback:
      "I was impressed with the thoroughness and dedication of the cleaning team. They went above and beyond to ensure every corner was spotless.",
  },
  {
    Name: "Emily Brown",
    role: "Teacher",
    image: man,
    feedback:
      "Fantastic service! The team was friendly, efficient, and left my home in perfect condition. I'll definitely use their services again.",
  },
  {
    Name: "Emily Brown",
    role: "Frontend",
    image: man,
    feedback:
      "Hello this ia Ayaz ali dharejo frontend developer  i have bulid e-commmorce website and web applications  and User-Friendly bug fixing",
  },
  {
    Name: "Emily Brown",
    role: "WorkPress",
    image: man,
    feedback:
      "Hello this ia Ayaz ali dharejo frontend developer  i have bulid e-commmorce website and web applications  and User-Friendly bug fixing   ",
  },
];

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);  // Start with second testimonial for the right card

  const handleNext = () => {
    // Move to the next testimonial (right card)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    // Move to the previous testimonial (right card)
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-black">
          Feedback About Their Experience With Us
        </h2>
        <p className="text-gray-600 mt-2">
          Read testimonials from our satisfied clients. See how our cleaning
          services have made a difference in their lives and homes.
        </p>
      </div>

      {/* Feedback Section */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            {/* Left Card (Fixed) */}
            <div className="col-md-6 col-12 mb-">
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center relative ">
                {/* Image */}
                {/* <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                  <img
                    src={testimonials[0].image}  // Always show the first testimonial
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div> */}

                {/* Content */}
                <div className="ml-6 py-4 ">
                  <h3 className="text-4xl font-bold text-black py-3 leading-tight">{testimonials[0].name}</h3>
                  {/* <p className="text-gray-500 text-sm">{testimonials[0].role}</p> */}
                  {/* Star Ratings */}
                  {/* <div className="text-yellow-500 flex mt-2">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                  </div> */}
                  {/* Feedback Text */}
                  <p className="text-gray-600 mt- ">{testimonials[0].feedback}</p>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-green-500 text-5xl font-bold">
                  &#8220;
                </div>
              </div>
            </div>

            {/* Right Card (Changes) */}
            <div className="col-md-6 col-12 py">
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center relative  ">
                {/* Image */}
                <div className="w-32 h-32  overflow-hidden flex-shrink-0 border-4 border-white ">
                  <img 
                    src={testimonials[currentIndex].image}  // Right card changes
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Content */}
                <div className="ml-6 py-4">
                  <h3 className="text-lg font-bold text-black">{testimonials[currentIndex].Name}</h3>
                  <p className="text-gray-500 text-sm pb-2 leading-relaxed">{testimonials[currentIndex].role}</p>
                  {/* Star Ratings */}
                  <div className="text-yellow-500 flex mt-2">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                  </div>
                  {/* Feedback Text */}
                  <p className="text-gray-600 mt-2">{testimonials[currentIndex].feedback}</p>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-green-500 text-5xl font-bold">
                  &#8220;
                </div>
              </div>
            </div>
          </div>

          {/* Arrows at the bottom and aligned to the left */}
          <div className="flex justify-start mt-6">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-2 border-2 border-green-500 text-green-500 flex justify-center items-center hover:bg-green-500 hover:text-white transition mx-2"
            >
              &#8592;
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-2 border-2 border-green-500 text-green-500 flex justify-center items-center hover:bg-green-500 hover:text-white transition mx-2"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
