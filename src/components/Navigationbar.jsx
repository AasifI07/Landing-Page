import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Navigationbar = () => {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 lg:py-5 flex-wrap ">
          <div className="flex gap-3 text-white text-sm sm:text-base md:text-lg lg:text-xl flex-wrap">
            <h3 className="flex items-center gap-2">
              <CiMail className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
              <div className="ms-2">marketing@jeyamwebsolutions.com</div>
            </h3>
            <h3 className="flex items-center gap-2 ms-3">
              <FaPhone className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
              <div className="ms-2">+91 96 77 87 6445</div>
            </h3>
          </div>
          <div className="flex text-white gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-2 sm:mt-0">
            <FaWhatsapp className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            <FaFacebook className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            <FaTwitter className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            <FaLinkedin className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            <FaPinterest className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            <FaInstagram className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            <FaYoutube className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          </div>
          <div className="bg-orange-600 rounded-2xl text-sm text-white mt-2 sm:mt-0">
            <button className="flex p-2 items-center gap-2">
              <FaTelegram className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
              <div className="hidden sm:block">Get A Quote</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
