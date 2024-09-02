import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import kvricon from '../assets/images/kvr.png';
import gicon from '../assets/images/googleicon.webp';

const Try = () => {
  return (
    <div className='w-auto py-4'>
      <div>
        <div>
          <h1 className="text-justify text-3xl sm:text-4xl md:text-5xl font-bold">
            Google Ratings & Reviews
          </h1>
          <p className="py-4 text-center text-orange-500 text-xl sm:text-2xl md:text-3xl font-semibold">
            Jayam Web Solutions
          </p>
          <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold">4.7</p>
        </div>
      </div>
      <div className=' mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 sm:2/3 md:w-3/4 lg:w-1/2'>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className='mySwiper'
        >
          <SwiperSlide className='flex items-center justify-center bg-white px-4 sm:px-6 md:px-8'>
            <div className="ml-4 sm:ml-6 md:ml-8 lg:ml-10">
              <div className="flex justify-between py-4 sm:py-5 flex-wrap">
                <div className="flex items-center">
                  <div>
                    <img src={kvricon} className="w-16 sm:w-20 md:w-24" alt="KVR Group" />
                  </div>
                  <div className="ms-4 sm:ms-6 md:ms-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">KVR Group</h2>
                  </div>
                </div>

                <div>
                  <img className="w-12 sm:w-16 md:w-20" src={gicon} alt="Google Icon" />
                </div>
              </div>

              <div className="text-lg sm:text-xl md:text-2xl">www.kvrgroup.com</div>

              <div className="mt-2 sm:mt-4 md:mt-6">
                <div>
                  <p className="text-slate-500 text-sm sm:text-base md:text-lg font-semibold">
                    Review of Jayam Web Solution for Website Development
                  </p>
                  <p className="text-slate-500 text-sm sm:text-base md:text-lg font-semibold">
                    Jayam Web Solution recently developed our company's <br /> website and we
                    are thrilled with the results.
                  </p>
                  <h2 className="text-orange-500 text-base sm:text-lg md:text-xl font-bold">Read More</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='flex items-center justify-center bg-white px-4 sm:px-6 md:px-8'>
            <div className="ml-4 sm:ml-6 md:ml-8 lg:ml-10">
              <div className="flex justify-between py-4 sm:py-5 flex-wrap">
                <div className="flex items-center">
                  <div>
                    <img src={kvricon} className="w-16 sm:w-20 md:w-24" alt="KVR Group" />
                  </div>
                  <div className="ms-4 sm:ms-6 md:ms-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">KVR Group</h2>
                  </div>
                </div>

                <div>
                  <img className="w-12 sm:w-16 md:w-20" src={gicon} alt="Google Icon" />
                </div>
              </div>

              <div className="text-lg sm:text-xl md:text-2xl">www.kvrgroup.com</div>

              <div className="mt-2 sm:mt-4 md:mt-6">
                <div>
                  <p className="text-slate-500 text-sm sm:text-base md:text-lg font-semibold">
                    Review of Jayam Web Solution for Website Development
                  </p>
                  <p className="text-slate-500 text-sm sm:text-base md:text-lg font-semibold">
                    Jayam Web Solution recently developed our company's <br /> website and we
                    are thrilled with the results.
                  </p>
                  <h2 className="text-orange-500 text-base sm:text-lg md:text-xl font-bold">Read More</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>





      <div className="flex py-4 sm:py-5 md:py-6 justify-center">
        <button className="py-2 sm:py-3 px-4 sm:px-5 text-white bg-orange-500 rounded text-sm sm:text-base md:text-lg">
          More Reviews on Google
        </button>
      </div>
    </div>
  );
}

export default Try;
