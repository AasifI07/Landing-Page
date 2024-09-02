import React from "react";
import blogone from "../assets/images/blog1.webp";
import blogtwo from "../assets/images/blog2.webp";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Recent Blog</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6">
          Our blog covers a wide range of recent topics related to web
          development, SEO, digital marketing, and e-commerce. We provide valuable
          insights, practical tips, and the latest industry trends that help our
          readers enhance their online presence and achieve their business
          goals.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 py-5">
        
        <div className="flex-1">
          <img src={blogone} className="w-full h-auto object-cover" />
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 py-4 sm:py-5">
            Web Design
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            Advantages of using a professional web design for <br /> your
            business in 2023
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 py-3 sm:py-4">
            User engagement is what we all are aiming for! It is easier for anyone to whip up a website, but only if you maintain a <br />
            professional web design using the best website design practices.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-500">Read More...</p>
        </div>

        <div className="flex-1">
          <img src={blogtwo} className="w-full h-auto object-cover" />
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 py-4 sm:py-5">
            Web Development
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            Essential things to improve B2B in Website <br /> Development
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 py-3 sm:py-4">
            Web Development is one of the most significant aspects of any business. Ensuring that your website is effective and
            efficient allows you to attract more customers, leads, and sales...
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-500">Read More...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
