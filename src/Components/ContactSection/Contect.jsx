import React from "react";

const KeepInTouch = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h2 className="text-4xl font-bold mb-6">Keep In Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            + Contact Info
          </h3>
          <p className="text-gray-600">
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeepInTouch;
