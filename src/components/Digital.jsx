import React from "react";
import seo1 from "../assets/images/seo.webp";

const Digital = () => {
  return (
    <div className="bg-[#184251]">
      <div className="py-5 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Digital Marketing
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="order-2 sm:order-1 text-center sm:text-left sm:w-1/2">
          <h2 className="text-white text-2xl sm:text-3xl py-5 md:text-4xl lg:text-5xl font-bold mb-4">
            SEO - Search Engine <br /> Optimization
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever{" "}
            <br />
            since the 1500s, when an unknown printer took a galley of type and
            scrambled <br />
            it to make a type specimen book. It has survived not only five
            centuries,
            <br /> but also the leap into electronic typesetting, remaining
            essentially unchanged.
            <br /> It was popularised in the 1960s with the release of Letraset sheets containing <br />
            Lorem Ipsum passages, and more recently with desktop publishing <br />
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="text-center sm:text-left">
            <button className="py-2 px-4 sm:py-3 sm:px-5 bg-teal-950 rounded-lg text-lg sm:text-xl text-white border-2 border-cyan-400">
              Read More
            </button>
          </div>
        </div>
        <div className="order-1 sm:order-2 mt-6 sm:mt-0 sm:w-1/2">
          <img src={seo1} alt="SEO Optimization" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Digital;
