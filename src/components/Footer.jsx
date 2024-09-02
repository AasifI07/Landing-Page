import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#212529] py-8 px-4 sm:px-6  lg:px-8 ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-6 sm:gap-8 lg:gap-12">
   
        <div className="flex-1 text-white">
          <h1 className="text-lg font-bold py-2">Contact Us</h1>
          <h3 className="font-semibold py-2">Address:</h3>
          <p className="text-[#A8C5D5] text-sm sm:text-base">
            No.1, First Floor, First Street
            <br /> Bharathi Nagar, Tambaram
            <br /> Mudichur Road
            <br /> Tambaram West, Chennai - 600063
            <br /> Tamil Nadu, India
          </p>

          <h3 className="font-semibold py-4">Phone:</h3>
          <p className="text-[#A8C5D5] text-sm sm:text-base">
            +91-44-43162953
            <br /> +91-9677 87 6445
            <br /> +91-9840 59 9789
            <br /> +91-93446 37337
          </p>

          <h3 className="font-semibold py-4">Email:</h3>
          <p className="text-[#A8C5D5] text-sm sm:text-base">
            marketing@yayamwebsolutions.com
          </p>
        </div>

      
        <div className="flex-1 text-white">
          <h1 className="text-lg font-bold py-2">Our Services</h1>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Web Design & Development</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > ECommerce Website</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Digital Marketing</p>
        </div>

        <div className="flex-1 text-white">
          <h1 className="text-lg font-bold py-2">More Services</h1>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Mobile App Development</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Web Hosting</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Email Hosting</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Domain Registration</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Brand Identity</p>
          <p className="text-[#A8C5D5] text-sm sm:text-base"> > Privacy & Policy</p>
        </div>
      </div>
 <div className="relative w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2825663396698!2d80.09183210852146!3d12.922271759999262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f722faf2fdf%3A0xe2d593275a30054b!2sJayam%20Web%20Solutions!5e1!3m2!1sen!2sin!4v1581336209957!5m2!1sen!2sin"
          className="w-full h-64 sm:h-80 lg:h-96"
          title="Google Map"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
