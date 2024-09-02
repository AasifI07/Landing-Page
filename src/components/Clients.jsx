import React from "react";
// import clientone from "../assets/images/logo-ex.png";
// import clienttwo from "../assets/images/flame.webp";
// import clientthree from "../assets/images/client3.jpg";
// import clientfour from "../assets/images/client4.webp";
// import clientfive from "../assets/images/client5.webp";
// import clientsix from "../assets/images/client6.webp";
// import clientseven from "../assets/images/client7.webp";
// import clienteight from "../assets/images/client8.webp";
// import clientnine from "../assets/images/client9.webp";
// import clientten from "../assets/images/client10.webp";
// import clienteleven from "../assets/images/client11.webp";
// import clienttwe from "../assets/images/client12.webp";

import Records from "../records.json"

const Clients = () => {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-5xl font-extrabold text-center mb-8">Few of Our Clients</h1>
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-4">
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientone} className="max-w-full max-h-[100px] object-contain" />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clienttwo} className="max-w-full max-h-[100px] object-contain"  />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientthree} className="max-w-full max-h-[100px] object-contain"  />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientfour} className="max-w-full max-h-[100px] object-contain" />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientfive} className="max-w-full max-h-[100px] object-contain"  />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientsix} className="max-w-full max-h-[100px] object-contain"  />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientseven} className="max-w-full max-h-[100px] object-contain"/>
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clienteight} className="max-w-full max-h-[100px] object-contain" />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientnine} className="max-w-full max-h-[100px] object-contain"  />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clientten} className="max-w-full max-h-[100px] object-contain" />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clienteleven} className="max-w-full max-h-[100px] object-contain" />
          </div>
          <div className="flex justify-center items-center border-2 border-slate-300 p-4">
            <img src={clienttwe} className="max-w-full max-h-[100px] object-contain"  />
          </div>
        </div> */}


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-4">
         
          {
            Records && Records.map(record =>{
              return(
                <div className="flex justify-center items-center border-2 border-slate-300 p-4" key={ record.id }>
                <img src={record.image} className="max-w-full max-h-[100px] object-contain" alt=""/>
                </div>
              )
            })
          }
        
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="py-3 px-5 text-slate-500 border-black bg-white rounded-[5px] text-lg hover:text-white hover:bg-orange-500 hover:border-black border-2 hover:border-orange-500">View More</button>
      </div>
    </div>
  );
};

export default Clients;
