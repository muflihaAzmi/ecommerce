import React from "react";

function Marketing({backimage ,cardname } :{backimage:string,cardname:string}) {
 

  return (
    <div className="flex flex-col gap-10 mt-10 w-full px-5  ">
     
        <div
        
          className="bg-cover bg-center md:h-[450px] md:w-[700px] md:ml-10 pl-10 pt-10 md:mt-10 transition-transform duration-500 hover:scale-110 "
          style={{ backgroundImage: `url(${backimage} )` } }
        >
          <div className="bg-white md:w-[400px] w-[280px] h-[350px] flex flex-col p-5 shadow-lg rounded  overflow-y-scroll no-scrollbar">
            <div className="flex flex-row justify-between items-center mb-3">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-3xl">{cardname}</button>
              <h1 className="text-black text-sm">March 27, 2025</h1>
            </div>
            <h1 className="text-2xl font-semibold mb-4 text-black md:mt-10">
              Implementing effective & fair workload distribution in your
              product team.
            </h1>
            <div className="flex items-center gap-3 md:mt-10">
              <img
                className="w-10 h-10 rounded-full"
                src="https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e3ebbccc71de8744fd5fd9_Ellipse%206.webp"
                alt="Eleanor Pena"
              />
              <div className="text-black flex flex-col text-sm">
                <h1 className="font-semibold">Eleanor Pena ,</h1>
                <h1>AI Engineer</h1>
              </div>
              <div className="flex flex-end ml-20 text-gray-700"> <h1>10 min read</h1></div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Marketing;
