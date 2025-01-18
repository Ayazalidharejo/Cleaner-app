import React from "react";
import logo1 from "../../assets/insta.png"
import logo2 from "../../assets/twite.png"
import logo3 from "../../assets/youtube.png"
import phone from "../../assets/phone.png"
import map from "../../assets/map.png"

import { Icon } from "@iconify/react";



const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-10">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-lg font-bold mb-4">Logo</h3>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod
              tempor incididunt ut.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="  p-2 rounded-full hover:bg-gray-200"
              >
               <img src={logo2} alt="" />
              </a>
              <a
                href="#"
                className="  p-2 rounded-full hover:bg-gray-200"
              >
               <img src={logo1} alt="" />
              </a>
              <a
                href="#"
                className="  p-2 rounded-full hover:bg-gray-200"
              >
                <img src={logo3} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  Transport
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  Moving Help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:underline">
                  House Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200 text-sm">
              Our Support and Sales team is available 24/7 to answer your
              queries:
            </p>
            <ul className="mt-4 space-y-2">
            <li className="flex items-start    gap-2 text-gray-200 text-sm">
  {/* <Icon className="mt-1 text-xl" icon="weui:location-outlined" /> */}
  <Icon className="text-3xl " icon="iconoir:map-pin" />
  {/* <img src={map} alt="" /> */}
  123 Main St, Suite 500, New York, NY 10001
</li>

              <li className="flex items-center  gap-2 text-gray-200 text-sm">
  {/* <Icon icon="solar:phone-line-duotone" /> */}
  <Icon className="text-2xl ps-1" icon="bi:telephone" />
  {/* <img src={phone} alt="" /> */}
  +1 (333) 000-0000
</li>
<li className="flex items-center gap-2 text-gray-200 text-sm">
  {/* <Icon icon="solar:phone-line-duotone" /> */}
  <Icon className="text-2xl ps-1" icon="bi:telephone" />
  {/* <img src={phone} alt="" /> */}
  +1 (333) 000-0000
</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-200 border-t border-gray-300 pt-4">
        <p>COPYRIGHT © 2023 CLEANING |</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            TERM OF USE
          </a>
          <a href="#" className="hover:underline">
            PRIVACY POLICY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
