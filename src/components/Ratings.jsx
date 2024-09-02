import React from "react";
import kvricon from '../assets/images/kvr.png';
import gicon from '../assets/images/googleicon.webp';




const Ratings = () => {
  return (
  
     <div className="w-[60%]">
      <div>
        <h1 className="text-center text-5xl font-bold">
          Google Ratings & Reviews
        </h1>
        <p className="py-5 text-center text-orange-500 text-3xl font-semibold">
          Jayam Web Solutions
        </p>
        <p className="text-center text-2xl font-bold">4.7 </p>
      </div>

      <div className="ml-8">
      <div className="flex justify-evenly py-5  ">
        <div className="flex items-center">
          <div>
            <img src={kvricon} />
          </div>
          <div className="ms-5">
            <h2 className="text-2xl font-bold">KVR Group</h2>
          </div>
        </div>

        <div>
          <img className="w-[15%]" src={gicon} />
        </div>
        </div>
      
      <div className="text-xl font-base ">www.kvrgroup.com</div>

      <div className="mt-2">
        <div>
          <p className="text-slate-500 text-base font-semibold">
            Review of Jayam Web Solution for Website Developement
          </p>
          <p className="text-slate-500 text-base font-semibold">
            Jayam Web Solution recently developed our company's <br/> website and we
            are thrilled with the results.
          </p>
          <h2 className="text-orange-500 yext-lg font-bold">Read More</h2>
          </div>
          </div>
      </div>
          
    <div className="flex py-5 justify-center">
          <button className="py-3 px-5 text-white bg-orange-500 rounded-[5px] text-lg ">
            More Reviews on Google
          </button>
        </div>
   
  
   </div>

  );
};

export default Ratings;
