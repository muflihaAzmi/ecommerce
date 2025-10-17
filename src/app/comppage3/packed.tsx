import { MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Packed() {
  return (
    <div className="w-full min-h-screen md:px-30 ">
      <div>
        <div className="flex md:flex-row  md:justify-between w-full  flex-col p-5">
          <h2 className="text-black md:text-6xl  text-3xl md:w-[800px] w-full">
            Packed with the features you need
          </h2>
          <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
            <button className="bg-white text-black px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
              Book a Demo
            </button>
            <MoveRight className="mr-4 text-white" />
          </div>
        </div>
        <div className="">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-4 mt-10 px-5 ">
          <motion.div
            className="bg-gray-100 h-[480px] md:w-[390px] w-full "
            initial={{ y:-20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{duration:2}}
          viewport={{once:true}}
          >
            <div className="flex flex-col justify-center px-8 py-4 gap-4 ">
              <Image
                src="/points.jpg"
                alt="anneblack"
                width={350}
                height={400}
              />
              <p className="text-black text-xl font-semibold px-2">
                operating Globally
              </p>
              <p className="text-12px text-gray-400 px-2">
                Send payments to 195 countries in over 40 currencies and
                reimburse employees.
              </p>
            </div>
          </motion.div>
          <motion.div className="bg-gray-100 h-[480px] md:w-[390px] w-full "
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:2}}
          viewport={{once:true}}>
            
            <div className="flex flex-col justify-center px-8 py-5 gap-4 ">
              <p className="text-black text-xl font-semibold px-2">
                Automated Marketing
              </p>
              <p className="text-12px text-gray-400 px-2">
                Get dedicated support anytime, anywhere.We're always ready to
                help.
              </p>
              <Image
                src="/anneblack.avif"
                alt="anneblack"
                width={350}
                height={400}
              />
            </div>
          </motion.div>
          <motion.div className="bg-gray-100 h-[480px] md:w-[390px] w-full "
        
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:2}}
          viewport={{once:true}}>
            <div className="flex flex-col justify-center px-8 py-5 gap-4 ">
              <Image
                src="/anneblack.avif"
                alt="anneblack"
                width={350}
                height={400}
              />
              
              <p className="text-black text-xl font-semibold px-2">
                Completely flexible
              </p>
              <p className="text-12px text-gray-400 px-2">
                Customize Pointer to fit your business and give you the controls
                you need with policies.
              </p>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Packed;
