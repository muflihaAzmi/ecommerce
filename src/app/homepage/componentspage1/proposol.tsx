import { ChevronRight, ChevronsDown, } from "lucide-react";
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
    <div className="w-full">
      <div className=" min-h-screen md:px-13 border-l mt-10 flex lg:flex-row md:justify-center sm:flex-col flex-col gap-4 px-5 border-r ">
        <motion.div
          className="md:p-8 bg-gray-100 h-[650px] w-full p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full  flex flex-col  gap-4  ">
            <span className="text-black font-semibold text-[28px]">
              Commercial and specialty insurers
            </span>
            <p className="text-gray-700 text-[17px] w-full md:w-3/4">
              Extract key insurance data, analyze complex contracts, and get
              actionable insights in minutes. Boost productivity across
              insurance tasks like MRC processing and claims classification.
            </p>
            <div className="w-[180px] bg-white border border-gray-200 rounded-3xl items-center flex gap-4 px-1 py-1 mt-5">
              <motion.button className="bg-gray-200 text-black px-4 py-2 rounded-3xl text-[15px] ">
                <motion.h1
                  initial={{ y: 0, opacity: 1 }}
                  whileHover={{ y: 20, opacity: 0.5 }}
                >
                  Learn more
                </motion.h1>
              </motion.button>
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                whileHover={{ x: 20, opacity: 0.5 }}
              >
                {" "}
                 <ChevronRight  className="mr-4 text-black" />
              </motion.div>
              {/* <MoveRight className="mr-4 text-black" /> */}
            </div>
            <div className="mt-15">
              <Collapsible>
                <div className=" border-t-2 border-b-2 py-4 w-full">
                  <CollapsibleTrigger className="flex justify-between text-[20px] w-full font-semibold">
                    <span className="text-black">Clientportal</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-500 text-[17px] w-3/4">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              <Collapsible>
                <div className="border-t border-b py-4 w-full border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[20px] w-full font-semibold">
                    <span className="text-black ">Best budgets</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-500 text-[17px] w-3/4">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>
              <Collapsible>
                <div className=" border-t border-b py-4 w-full border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[20px] w-full font-semibold">
                    <span className="text-black">Time tracking</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-500 text-[17px] w-3/4">
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
        <motion.div
          className="origin-top w-full   "
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MotionImage
            src="/proposals.avif"
            alt="proposals"
            width={600}
            height={0}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Proposals;
