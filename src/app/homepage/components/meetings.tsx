import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronsDown, MoveRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import Image from 'next/image'
import { once } from 'events'

function meetings() {
  return (
    <div>
         <div className="w-full px-20 mt-10 flex flex-row  gap-4  ">
        <motion.div className="p-5 bg-gray-100" initial={{y:40 ,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration: 0.8, ease: "easeOut" }}>
          <div className="w-130  flex flex-col  gap-4  ">
            <span className="text-black font-semibold text-[18px]">
              Commercial and specialty insurers
            </span>
            <p className="text-gray-500 text-[12px] w-[350px] ">
              Extract key insurance data, analyze complex contracts, and get
              actionable insights in minutes. Boost productivity across
              insurance tasks like MRC processing and claims classification.
            </p>
            <div className="w-[130px] bg-white border border-gray-200 rounded-3xl items-center flex gap-2 px-1 py-1">
              <button className="bg-gray-200 text-black px-2 py-2 rounded-3xl text-[10px] ">
                Learn more
              </button>
              <MoveRight className="mr-4 text-black" />
            </div>
            <div>
              <Collapsible>
                <div className=" border-t-2 border-b-2 py-4 w-[400px]">
                  <CollapsibleTrigger className="flex justify-between text-[15px] w-[360px]">
                    <span className="text-black">Clientportal</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-400 text-[10px] w-[350px]">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              <Collapsible>
                <div className="border-t-1 border-b-1 py-4 w-[400px] border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[15px] w-[360px]">
                    <span className="text-black">Best budgets</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-400 text-[10px] w-[350px]">
                      Extract key insurance data, analyze complex contracts, and
                      get actionable insights in minutes. Boost productivity
                      across
                    </p>
                  </CollapsibleContent>
                </div>
              </Collapsible>
              <Collapsible>
                <div className=" border-t-1 border-b-1 py-4 w-[400px] border-gray-300">
                  <CollapsibleTrigger className="flex justify-between text-[15px] w-[360px]">
                    <span className="text-black">Time tracking</span>
                    <ChevronsDown className="text-gray-300" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-400 text-[10px] w-[350px]">
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
          className=""
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut"  }}
        >
          <Image
            src ="/meetings.avif"
            alt="meeting"
            width={500}
            height={200}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default meetings