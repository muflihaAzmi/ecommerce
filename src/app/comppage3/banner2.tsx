import React from "react";
import Image from "next/image";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import { spaceGrotesk } from "../ui/components";

function ImageRow() {
  // Number of times to repeat the image
  const repeatCount = 5;

  // Array with the same image repeated
  const star = Array.from({ length: repeatCount });

  return (
    <div className="  w-[90%] border-r-1 border-l-1 container mx-auto md:p-13 md:mt-10 mt-90">
      <div className="flex justify-center ">
        <p className={`text-black md:text-6xl text-3xl flex items-center  text-center font-semibold tracking-tighter [word-spacing:0.1px] leading-none ${spaceGrotesk.className} `}>
          Hear from those who matter
        </p>
      </div>
      <motion.div className="flex md:flex-row justify-between mt-20 flex-col gap-16 "
      initial={{y:-30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:2,ease:easeIn}}
       viewport={{once:true}}>
      <div className=" flex flex-col justify-center items-center">
        <Image src="Divpiolot.svg" alt="" width={160} height={50} />
        <div className="flex  gap-4 p-6">
          {star.map((_, index) => (
            <Image
              key={index}
              src="/star.png"
              alt=""
              width={500}
              height={0}
              className="w-[18px] h-[15px]  shadow-md"
            />
          ))}
        </div>
        <p className="text-black text-[20px]">Divpilot 2500+ reviews</p>
      </div>
      <div className=" flex justify-center ">
        <Image src="/leader.svg" alt="" width={160} height={50} />
     </div>
      <div className=" flex flex-col justify-center items-center">
        <Image src="centurra.svg" alt="" width={160} height={50} />
        <div className="flex  gap-4 p-6">
          {star.map((_, index) => (
            <Image
              key={index}
              src="/star.png"
              alt=""
              width={500}
              height={0}
              className="w-[18px] h-[15px]  shadow-md"
            />
          ))}
        </div>
        <p className="text-black text-[20px]">Divpilot 2500+ reviews</p>
      </div>
      </motion.div>
    </div>
  );
}

export default ImageRow;
