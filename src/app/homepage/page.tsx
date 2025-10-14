"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Proposals from "./components/proposol";
import Contracts from "./components/contracts";
import Retainers from "./components/retainers";
import Meetings from "./components/meetings";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"], // normal, semi-bold, bold
});

function Build() {
  const [Currentpage, setCurrentpage] = useState("proposals");

  return (
    <div>
      <div className=" ">
        <div className="md:flex justify-center  ">
          <p className="text-black md:text-[30px] ">
            Built to automate the everyday
          </p>
        </div>
        <div className="md:flex justify-center mt-5">
          <div className="flex rounded-3xl border justify-center items-center w-68 border-gray-400 bg-gray-200 text-gray-400 px-2 text-[10px]">
            <button
              onClick={() => setCurrentpage("proposals")}
              className={`px-2  py-1 ${
                Currentpage == "proposals"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              PROPOSALS
            </button>
            <button
              onClick={() => setCurrentpage("contracts")}
              className={`px-2  py-1 ${
                Currentpage == "contracts"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              CONTRACTS
            </button>
            <button
              onClick={() => setCurrentpage("retainers")}
              className={`px-2  py-1 ${
                Currentpage == "retainers"
                  ? "bg-black text-white rounded-3xl"
                  : " "
              }`}
            >
              RETAINERS
            </button>
            <button
              onClick={() => setCurrentpage("meetings")}
              className={`px-2  py-1 ${
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
