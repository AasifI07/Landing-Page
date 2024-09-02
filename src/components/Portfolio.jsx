import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import staticImageone from "../assets/images/brightfuture.webp";
import staticImagetwo from "../assets/images/ccdindia1.webp";
import staticImagethree from "../assets/images/emtindia1.webp";

import dynamicone from "../assets/images/dynamic1.webp";
import dynamictwo from "../assets/images/dynamic2.webp";
import dynamicthree from "../assets/images/dynamic3.webp";

import webone from "../assets/images/web1.webp";
import webtwo from "../assets/images/web2.webp";
import webthree from "../assets/images/web3.webp";

import logoone from "../assets/images/logoo1.webp";
import logotwo from "../assets/images/logoo2.webp";
import logothree from "../assets/images/logoo3.webp";

import brochureone from "../assets/images/b1.webp";
import brochuretwo from "../assets/images/b2.webp";
import brochurethree from "../assets/images/b3.webp";

const Portfolio = () => {
  return (
    <div className="py-8 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        <h1>Our Portfolio</h1>
      </div>
      <div className="text-center mt-5">
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-500">
          Recently Launched Websites{" "}
          <span className="text-orange-500">Click to see more</span>
        </h3>
      </div>
      <div className="mt-8">
        <Tabs>
          <div className="block md:hidden">
            <div className="flex flex-col gap-4">
              <TabList className="flex flex-col items-center">
                <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                  STATIC
                </Tab>
                <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                  DYNAMIC
                </Tab>
                <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                  WEB APPLICATION
                </Tab>
                <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                  LOGO
                </Tab>
                <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                  BROCHURE
                </Tab>
              </TabList>
              <TabPanel>
                <div className="py-5">
                  <div className="flex flex-col gap-5 justify-center">
                    <div className="w-full">
                      <img
                        src={staticImageone}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={staticImagetwo}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={staticImagethree}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-5">
                  <div className="flex flex-col gap-5 justify-center">
                    <div className="w-full">
                      <img
                        src={dynamicone}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={dynamictwo}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={dynamicthree}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-5">
                  <div className="flex flex-col gap-5 justify-center">
                    <div className="w-full">
                      <img
                        src={webone}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={webtwo}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={webthree}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-5">
                  <div className="flex flex-col gap-5 justify-center">
                    <div className="w-full">
                      <img
                        src={logoone}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={logotwo}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={logothree}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-5">
                  <div className="flex flex-col gap-5 justify-center">
                    <div className="w-full">
                      <img
                        src={brochureone}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={brochuretwo}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={brochurethree}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>

          <div className="hidden md:block">
            <TabList className="flex flex-row justify-center gap-4">
              <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                STATIC
              </Tab>
              <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                DYNAMIC
              </Tab>
              <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                WEB APPLICATION
              </Tab>
              <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                LOGO
              </Tab>
              <Tab className="text-slate-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 hover:text-orange-500 cursor-pointer">
                BROCHURE
              </Tab>
            </TabList>

            <TabPanel>
              <div className="py-5">
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <div className="w-full sm:w-1/3">
                    <img
                      src={staticImageone}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={staticImagetwo}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={staticImagethree}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-5">
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <div className="w-full sm:w-1/3">
                    <img
                      src={dynamicone}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={dynamictwo}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={dynamicthree}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-5">
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <div className="w-full sm:w-1/3">
                    <img src={webone} className="w-full h-auto object-cover" />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img src={webtwo} className="w-full h-auto object-cover" />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={webthree}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-5">
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <div className="w-full sm:w-1/3">
                    <img src={logoone} className="w-full h-auto object-cover" />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img src={logotwo} className="w-full h-auto object-cover" />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={logothree}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-5">
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <div className="w-full sm:w-1/3">
                    <img
                      src={brochureone}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={brochuretwo}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <img
                      src={brochurethree}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="py-3 px-5 text-white bg-black rounded-lg text-lg hover:bg-gray-800 hover:border-gray-800 border-2 border-transparent transition">
            Know More
          </button>
          <button className="py-3 px-5 text-blue-500 bg-white border-blue-500 rounded-lg text-lg border-2 hover:bg-orange-500 hover:text-white hover:border-transparent transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
