import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400 transition-colors duration-300 ease focus:text-gray-400 outline-none"
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer hover:text-gray-400 transition-colors duration-300 ease focus:text-gray-400 outline-none"
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer hover:text-gray-400 transition-colors duration-300 ease focus:text-gray-400 outline-none"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400 transition-colors duration-300 ease focus:text-gray-400 outline-none"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition-colors ease-in duration-300 outline-none focus:bg-blue-500 focus:text-white">
          Sign Up
        </button>
        <img
          className="md:hidden w-7 cursor-pointer"
          src={assets.menu_icon}
          onClick={() => setShowMobileMenu(true)}
          alt=""
        />
      </div>
      {/* --------------- mobile-menu -------------    */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="container mx-auto">
          <button
            className="flex ml-auto p-6"
            onClick={() => setShowMobileMenu(false)}
          >
            <img
              className="w-6 cursor-pointer"
              src={assets.cross_icon}
              alt=""
            />
          </button>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-large font-medium">
            <a
              onClick={() => setShowMobileMenu(false)}
              className="px-4 py-2 rounded-full inline-block hover:text-blue-500 transition-colors duration-300 ease focus:text-blue-500 outline-none"
              href="#Header"
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              className="px-4 py-2 rounded-full inline-block hover:text-blue-500 transition-colors duration-300 ease focus:text-blue-500 outline-none"
              href="#About"
            >
              About
            </a>{" "}
            <a
              onClick={() => setShowMobileMenu(false)}
              className="px-4 py-2 rounded-full inline-block hover:text-blue-500 transition-colors duration-300 ease focus:text-blue-500 outline-none"
              href="#Projects"
            >
              Projects
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              className="px-4 py-2 rounded-full inline-block hover:text-blue-500 transition-colors duration-300 ease focus:text-blue-500 outline-none"
              href="#Testimonials"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
