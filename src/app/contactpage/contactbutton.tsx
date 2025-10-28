import { ChevronRight } from "lucide-react";

import React, { ReactNode } from "react";
import Image from "next/image";

interface ContactPops {
  image: string;
  Title: string;
  Description: string;
}

function Contactbutton({ image, Title, Description }: ContactPops) {
  return (
    <div>
      <div className="w-[400px] bg-gray-100 h-[200px] ">
        <div className="flex flex-row gap-4 p-4">
          {" "}
          <div>
            <Image src={image} alt="logo" width={50} height={50} />
          </div>
          <div>
            <h1 className="text-black">{Title}</h1>
            <p className="text-gray-700">{Description}</p>
          </div>
        </div>
      
        <div className="w-[200px] bg-white border border-gray-200 rounded-3xl items-center flex   gap-2 px-1 py-1 ml-40">
          <button className="bg-gray-200 text-black px-4 py-2 rounded-3xl text-[15px] ">
            Book a Demo
          </button>
          <ChevronRight className="mr-4 text-black" />
        </div>
      </div>
    </div>
  );
}

export default Contactbutton;
