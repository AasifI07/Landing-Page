import React, { useState } from "react";
import website from '../assets/images/website.gif';
import logo from "../assets/images/logo.png";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="h-10" />
        </div>

        
        <nav className="hidden md:flex gap-5 text-sky-500 font-semibold items-center">
          <div className="text-orange-500">Home</div>
          <div className="hover:text-orange-500">About</div>
          <div
            className="relative hover:text-orange-500"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center cursor-pointer">
              <span>Services</span>
              <FaCaretDown className="ml-2" />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-lg z-10 w-[70vw] max-w-screen-xl p-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Web Design & Development</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">Web Development</li>
                      <li className="py-2">Web Design/RE-Design</li>
                      <li className="py-2">Web Applications</li>
                      <li className="py-2">CMS Web Development</li>
                      <li className="py-2">Web Maintenance</li>
                      <li className="py-2">UI/UX Design</li>
                      <li className="py-2">Landing Page Design</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Web Hosting</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">Shared Hosting</li>
                      <li className="py-2">Cloud Hosting</li>
                      <li className="py-2">Dedicated Hosting</li>
                      <li className="py-2">VPS Hosting</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">ECommerce Website</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">Full Featured eCommerce Web Development</li>
                      <li className="py-2">Simple eCommerce Web Development</li>
                      <li className="py-2">Magento Development</li>
                      <li className="py-2">WooCommerce Development</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Email Hosting</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">Business Email Hosting</li>
                      <li className="py-2">Enterprise Email Hosting</li>
                      <li className="py-2">Gsuite</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Digital Marketing</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">SEO, SEM</li>
                      <li className="py-2">SMO, SMM</li>
                      <li className="py-2">Link Building Service</li>
                      <li className="py-2">Content Marketing</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Brand Identity</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">Logo Design</li>
                      <li className="py-2">Brochure Design</li>
                      <li className="py-2">Flyer Design</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Mobile App Development</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li className="py-2">Android App Development</li>
                      <li className="py-2">iOS App Development</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold text-base text-blue-500">Domain Registration</h2>
                    <ul className="text-xs font-medium text-slate-500 space-y-2 mt-2">
                      <li>New Domain Name Registration</li>
                      <li>Domain Transfer</li>
                      <img className="w-[100%]" src={website} alt="Domain Registration"/>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="hover:text-orange-500">Portfolio</div>
          <div className="hover:text-orange-500">Career</div>
          <div className="hover:text-orange-500">Blog</div>
          <div className="hover:text-orange-500">Contact Us</div>
          <div className="hover:text-orange-500">Download Brochure</div>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-20 shadow-lg p-5 overflow-scroll md:hidden">
          <button
            className="text-2xl absolute top-4 right-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Home</h1>
            <h1 className="text-lg font-semibold">About</h1>
            <div>
              <button
                className="flex items-center text-lg font-semibold"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
                <FaCaretDown className="ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white border border-gray-200 shadow-lg p-4 ">
                  <ul>
                    <li className="py-2 font-bold text-base text-blue-500">Web Design & Development</li>
                    <li className="py-2">Web Design/RE-Design</li>
                    <li className="py-2">Web Developement</li>
                    <li className="py-2">Web Applications</li>
                    <li className="py-2">CMS Web Development</li>
                    <li className="py-2">Web Maintenance</li>
                    <li className="py-2">UI/UX Design</li>
                    <li className="py-2">Landing Page Design</li>
                    <li className="py-2 font-bold text-base text-blue-500">Web Hoisting </li>
                    <li className="py-2">Shared Hosting</li>
                    <li className="py-2">Cloud Hosting</li>
                    <li className="py-2">Dedicated Hosting</li>
                    <li className="py-2">VPS Hosting</li>
                    <li className="py-2 font-bold text-base text-blue-500">ECommerce Website</li>
                    <li className="py-2">Full Featured eCommerce Web Development</li>
                    <li className="py-2">Simple eCommerce Web Development</li>
                    <li className="py-2">Magento Development</li>
                    <li className="py-2">WooCommerce Development</li>
                    <li className="py-2 font-bold text-base text-blue-500">Emil Hosting</li>
                    <li className="py-2">Business Email Hosting</li>
                    <li className="py-2">Enterprise Email Hosting</li>
                    <li className="py-2">Gsuite</li>
                    <li className="py-2 font-bold text-base text-blue-500">Digital Marketing</li>
                    <li className="py-2">SEO, SEM</li>
                    <li className="py-2">SMO, SMM</li>
                    <li className="py-2">Link Building Service</li>
                    <li className="py-2">Content Marketing</li>
                    <li className="py-2 font-bold text-base text-blue-500">Brand Identity</li>
                    <li className="py-2">Logo Design</li>
                    <li className="py-2">Brochure Design</li>
                    <li className="py-2">Flyer Design</li>
                    <li className="py-2 font-bold text-base text-blue-500">Mobile App Development</li>
                    <li className="py-2">Android App Development</li>
                    <li className="py-2">iOS App Development</li>
                    <li className="py-2 font-bold text-base text-blue-500">Domine Re</li>
                    <li className="py-2">New Domain Name Registration</li>
                    <li className="py-2">Domain Transfer</li>
                    <img className="w-full mt-4" src={website} alt="Domain Registration"/>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="text-lg font-semibold">Portfolio</a>
            <a href="#" className="text-lg font-semibold">Career</a>
            <a href="#" className="text-lg font-semibold">Blog</a>
            <a href="#" className="text-lg font-semibold">Contact Us</a>
            <a href="#" className="text-lg font-semibold">Download Brochure</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
