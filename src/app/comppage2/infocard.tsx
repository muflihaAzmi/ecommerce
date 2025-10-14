import React, { ReactNode } from "react";
interface InfoCardProps {
  logo: ReactNode;
  Title: string;
  Description: string;
}

function InfoCard({logo,Title,Description}:InfoCardProps) {
  return (
    <div >
      <div className="w-full md:w-[300px]  text-black px-5 flex flex-col gap-4 border-r-1 border-gray-300 ">
        <div>{logo}</div>
        <h2 className="font-semibold">{Title}</h2>
        <p className="text-gray-600">{Description}</p>
      </div>
      
    </div>
  );
}

export default InfoCard;
