"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Proposals from "./componentspage1/proposol";
import Contracts from "./componentspage1/contracts";
import Retainers from "./componentspage1/retainers";
import Meetings from "./componentspage1/meetings";
import { Space_Grotesk } from 'next/font/google';
 
 
 
  const spaceGrotesk = Space_Grotesk({
      subsets: ['latin'], // Specify the necessary subsets
      weight: ['400', '700'], // Specify the weights you want to use
      // You can also add other options like 'display', 'variable', etc.
    });
function Build() {
  const [Currentpage, setCurrentpage] = useState("proposals");

  return (
    <div className="w-full h-[100lvh] mt-20">
      <div className=" container mx-auto w-[90%]  ">
        <div className="flex justify-center  ">
          <p className={`text-black  md:text-6xl text-4xl tracking-tighter [word-spacing:0.01px] leading-tight text-center font-semibold ${spaceGrotesk.className}`}>
            Built to automate the everyday
          </p>
        </div>
        <div className="flex justify-center mt-5 ">
          <div className="md:flex grid grid-cols-2  md:rounded-3xl md:border md:justify-center items-center md:w-117 border-gray-400 bg-gray-100 text-gray-700 px-4  text-[15px]">
            <button
              onClick={() => setCurrentpage("proposals")}
              className={`px-4  py-2 ${
                Currentpage == "proposals"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              PROPOSALS
            </button>
            <button
              onClick={() => setCurrentpage("contracts")}
              className={`px-4  py-2 ${
                Currentpage == "contracts"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              CONTRACTS
            </button>
            <button
              onClick={() => setCurrentpage("retainers")}
              className={`px-4  py-2 ${
                Currentpage == "retainers"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              RETAINERS
            </button>
            <button
              onClick={() => setCurrentpage("meetings")}
              className={`px-4  py-2 ${
                Currentpage == "meetings"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              MEETINGS
            </button>
          </div>
        </div>
        {Currentpage === "proposals" && <Proposals />}
        {Currentpage === "contracts" && <Contracts />}

        {Currentpage === "retainers" && <Retainers />}

        {Currentpage === "meetings" && <Meetings />}

        {/* <Proposals/> */}
      </div>
    </div>
  );
}

export default Build;
