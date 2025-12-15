import { FileText, MoveRight } from "lucide-react";

import InfoCard from "./infocard";
import React from "react";
import { motion } from "motion/react";
import { spaceGrotesk } from "../ui/components";

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
    },
  ];
  return (
    <div className="w-full ">
      <div className=" container w-[90%] lg:mt-70 border-l  border-r mx-auto md:px-13 min-h-screen mt-150  flex flex-col gap-16 ">
        <div className="flex  md:justify-between sm:flex-col lg:flex-row flex-col p-5">
          <h2 className={`text-black lg:text-6xl sm:text-4xl text-2xl tracking-tighter md:w-[500px] font-semibold [word-spacing:0.1px] leading-tight ${spaceGrotesk.className} `}>
            Packed with the features you need
          </h2>
          <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
            <button className="bg-white text-black px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
              Book a Demo
            </button>
            <MoveRight className="mr-4 text-white" />
          </div>
        </div>
        <motion.div
          className="gap-3 grid md:grid-cols-2 lg:grid-cols-4 md:gap-10"
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
