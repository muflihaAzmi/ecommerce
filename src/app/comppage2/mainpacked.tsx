import { FileText, MoveRight } from "lucide-react";

import InfoCard from "./infocard";
import React, { ReactNode } from "react";
import { motion } from "motion/react";

function MainPacked() {
  const CardContent = [
    {
      logo: <FileText className="w-8 h-8" />,
      Title: "Invoicing",
      Description:
        "Create beautiful invoices, send automatic reminders and get.",
    },
    {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    },
     {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    },
     {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    },
     {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    },
   {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    },
     {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    },
     {
      logo: <FileText className="w-8 h-8" />,
      Title: "payment",
      Description:
        "Get paid via credit card or bank deposit in 100+ currencies.",
    }
    
  ];
  return (
    <div className="w-full">
    <div className=" container mx-auto md:px-20 min-h-screen md:mt-30 flex flex-col gap-16">
      <div className="flex md:flex-row md:justify-between flex-col p-5">
        <h2 className="text-black md:text-5xl  text-2xl">
          Packed with the <br></br>features you need
        </h2>
        <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
          <button className="bg-white text-black px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
            Book a Demo
          </button>
          <MoveRight className="mr-4 text-white" />
        </div>
      </div>
      <motion.div className=" flex flex-col gap-3 md:grid  md:grid-cols-4 md:gap-10"
  initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
>

      {CardContent.map((item, index) => (
        <InfoCard 
          key={index}
          logo={item.logo}
          Title={item.Title}
          Description={item.Description}
         
        />
      ))}
      </motion.div>

    </div>
    </div>
  );
}

export default MainPacked;
