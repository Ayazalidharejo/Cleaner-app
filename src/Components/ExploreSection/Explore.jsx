import React from "react";

const CleaningServices = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Cleaning Services Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">Cleaning Services</h2>
        <p className="text-gray-600 mb-8">
          Professional cleaning services to suit your needs.
        </p>
        <div className="row">
          {[
            "Deep Cleaning",
            "Kitchen Cleaning",
            "Office Cleaning",
            "Restaurant Cleaning",
            "Carpet & Upholstery Cleaning",
            "Shop Cleaning",
          ].map((service, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg">
                <div className="text-green-500 text-4xl mb-3">
                  <i className="fas fa-broom"></i>
                </div>
                <p className="text-gray-800 font-medium text-center">{service}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
          See All Services
        </button>
      </div>

      {/* Pricing Table Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Explore the Best Plans for Services</h2>
        <p className="text-gray-500 mb-10">
          Choose a plan that fits your needs and budget.
        </p>

        <div className="row">
          {[
            {
              title: "Basic Package",
              price: "$100",
              features: [
                "Routine cleaning",
                "Basic unpacking and organization",
                "Mirror and window cleaning",
              ],
            },
            {
              title: "Premium Package",
              price: "$200",
              features: [
                "Comprehensive deep cleaning",
                "Specialized transport",
                "High-value item organization",
              ],
            },
            {
              title: "Premium Transport",
              price: "$100",
              features: [
                "Efficient transport",
                "Packing and unpacking services",
                "Smooth transition",
              ],
            },
          ].map((plan, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="p-6 bg-gray-50 shadow-lg rounded-lg border hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {plan.title}
                </h3>
                <p className="text-2xl font-bold text-green-500 mb-6">
                  {plan.price} <span className="text-sm text-gray-500">/ hour</span>
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">
                        <i className="fas fa-check"></i>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;
