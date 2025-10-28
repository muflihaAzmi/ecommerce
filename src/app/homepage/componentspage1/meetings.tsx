import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronRight, ChevronsDown, MoveRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import Image from 'next/image'
import { once } from 'events'

function meetings() {
  return (
    <div className='w-full'>
        <div className="md:px-13 border-l-1 border-r-1 mt-10 flex lg:flex-row sm:flex-col flex-col gap-4 px-10 ">
        <motion.div className="md:p-8 bg-gray-100  w-full p-2"  initial={{y:40 ,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="w-full  flex flex-col  gap-4  ">
            <span className="text-black font-semibold text-[27px]">
              Commercial and specialty insurers
            </span>
            <p className="text-gray-500 text-[17px] w-full md:w-3/4">
              Extract key insurance data, analyze complex contracts, and get
              actionable insights in minutes. Boost productivity across
              insurance tasks like MRC processing and claims classification.
            </p>
            <div className="w-[180px] bg-white border border-gray-200 rounded-3xl items-center flex gap-2 px-1 py-1">
              <button className="bg-gray-200 text-black px-4 py-2 rounded-3xl text-[15px] ">
                Learn more
              </button>
              <ChevronRight  className="mr-4 text-black" />
            </div>
            <div  className="mt-15">
              <Collapsible>
                <div className=" border-t-2 border-b-2 py-4 w-full">
                  <CollapsibleTrigger className="flex justify-between text-[20px] w-full ">
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
                <div className="border-t-1 border-b-1 py-4 w-full border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[20px] w-full">
                    <span className="text-black">Best budgets</span>
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
                <div className=" border-t-1 border-b-1 py-4 w-full border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[20px] w-full">
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
          className=" w-full relative z-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut"  }}
        >
          <Image
            src ="/meetings.avif"
            alt="meeting"
            width={600} height={0} 
          />
          <div className='absolute bottom-40 left-60 z-10'><img src="meetinglogo.svg" alt=""></img></div>

        </motion.div>
      </div>
    </div>
  )
}

export default meetings