import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet to render child routes

const Navbar = () => {
  return (
    <>
      {/* Your Navbar content */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-green-500">
              <a href="/">Home</a> {/* You can use Link instead of a tag */}
            </li>
            <li className="hover:text-green-500">
              <a href="#">About Us</a>
            </li>
            <li className="hover:text-green-500">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-green-500">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-green-500">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div>
            <input
              type="text"
              placeholder="Search Service"
              className="border rounded-full px-4 py-2"
            />
          </div>
        </div>
      </nav>

      {/* The Outlet will render child routes like HomePage */}
      <Outlet /> 
    </>
  );
};

export default Navbar;
