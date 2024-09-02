import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const Heroslider = () => {
  return (
    <div>
      <Swiper 
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
        className="mySwiper"
      >
        <SwiperSlide className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-[url('/src/assets/images/image01.jpg')] bg-center bg-cover text-white flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="text-start">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
                Create Award Winning Websites
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                Since 2007
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                Check our 5-Star Client Reviews
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                <button className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-4 bg-[#0069d9] font-semibold rounded-lg hover:bg-orange-700">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-[url('/src/assets/images/image02.jpg')] bg-center bg-cover text-white flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="text-start">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                Explore Our Portfolio of
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                1000+ Websites
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                Your Success Starts Here
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                <button className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-4 bg-[#0069d9] font-semibold rounded-lg hover:bg-orange-700">
                  Portfolio
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-[url('/src/assets/images/image03.jpg')] bg-center bg-cover text-white flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="text-start">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                Maximize Your Lead Generation
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                Join 500+ Clients
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                Growing their Business with Our Designs
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                <button className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-4 bg-[#0069d9] font-semibold rounded-lg hover:bg-orange-700">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Heroslider;
