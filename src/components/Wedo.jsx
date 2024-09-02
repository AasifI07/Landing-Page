import React from "react";
import iconone from "../assets/images/imgicon1.png";
import icontwo from "../assets/images/imgicon2.png";
import iconthree from "../assets/images/imgicon3.png";

const Wedo = () => {
  return (
    <div className="bg-[#184251]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">What We Do</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 py-3">
          <div className="flex-1 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">SEO Services</h1>
            <div className="flex justify-center py-3">
              <img className="h-24 md:h-32 lg:h-40 mt-8" src={iconone} alt="SEO Services" />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-justify py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Web Hosting</h1>
            <div className="flex justify-center py-3">
              <img className="h-24 md:h-32 lg:h-40 mt-8" src={icontwo} alt="Web Hosting" />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-justify py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-white pb-3">Mobile App Development</h1>
            <div className="flex justify-center">
              <img className="h-24 md:h-32 lg:h-40 mt-4" src={iconthree} alt="Mobile App Development" />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-justify py-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
