import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  // State for controlling the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar content */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-xl font-bold">Logo</div>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-600">
            <li className="hover:text-green-500">
              <a href="/">Home</a>
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

          {/* Search Input - Always visible on all screen sizes */}
          <div className="relative block">
            <input
              type="text"
              placeholder="Search Service"
              className="border rounded-full px-4 py-2"
            />
            <Icon className="text-xl absolute top-3 right-8" icon="material-symbols-light:search-rounded" />
          </div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <button
            className="md:hidden text-gray-600"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col space-y-4 text-gray-600 px-6 py-4">
            <li className="hover:text-green-500">
              <a href="/">Home</a>
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
        </div>
      </nav>

      {/* The Outlet will render child routes like HomePage */}
      <Outlet />
    </>
  );
};

export default Navbar;
