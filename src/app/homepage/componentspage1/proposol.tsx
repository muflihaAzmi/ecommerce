import { ChevronsDown, MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion } from "motion/react";

function Proposals() {
  const MotionImage = motion(Image);

  return (
    <div>
      <div className=" min-h-screen w-full md:px-30 mt-10 flex lg:flex-row sm:flex-col flex-col gap-4 px-5 ">
        <motion.div
          className="md:p-5 bg-gray-100 md:w-full h-[600px] w-full p-2"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full  flex flex-col  gap-4  ">
            <span className="text-black font-semibold text-[20px]">
              Commercial and specialty insurers
            </span>
            <p className="text-gray-500 text-[15px] w-full md:w-3/4">
              Extract key insurance data, analyze complex contracts, and get
              actionable insights in minutes. Boost productivity across
              insurance tasks like MRC processing and claims classification.
            </p>
            <div className="w-[140px] bg-white border border-gray-200 rounded-3xl items-center flex gap-2 px-1 py-1">
              <button className="bg-gray-200 text-black px-2 py-2 rounded-3xl text-[10px] ">
                Learn more
              </button>
              <MoveRight className="mr-4 text-black" />
            </div>
            <div className="mt-5">
              <Collapsible>
                <div className=" border-t-2 border-b-2 py-4 w-full">
                  <CollapsibleTrigger className="flex justify-between text-[15px] w-full ">
                    <span className="text-black">Clientportal</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-500 text-[15px] w-3/4">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              <Collapsible>
                <div className="border-t-1 border-b-1 py-4 w-full border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[15px] w-full">
                    <span className="text-black">Best budgets</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-500 text-[15px] w-3/4">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>
              <Collapsible>
                <div className=" border-t-1 border-b-1 py-4 w-full border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[15px] w-full">
                    <span className="text-black">Time tracking</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-500 text-[15px] w-3/4">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>
          </div>
        </motion.div>
        <motion.div  className="origin-top w-full "
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MotionImage src="/proposals.avif" alt="proposals" width={570} height={0} />
        </motion.div>
      
    </div>
    </div>
  );
}

export default Proposals;
