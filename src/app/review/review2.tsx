import { motion } from "motion/react";
import React from "react";
import { spaceGrotesk } from "../ui/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
function Boomer() {
  return (
    <div className="min-h-screen  ">
      <div className="w-[90%] container mx-auto  border-l-1 border-r-1 md:px-30 px-5 ">
      
        <p
          className={`text-black lg:text-5xl sm:text-4xl text-3xl flex  items-center mt-10 font-semibold tracking-tighter [word-spacing:0.01px] leading-tight text-center ${spaceGrotesk.className}`}
        >
         Trusted by customers
        </p>
         <Carousel className="w-full mt-10">
          <CarouselContent>
       
            <CarouselItem>
              <div className="bg-gray-100 w-full flex md:flex-row justify-center items-center">
                <div className="sm:hidden hidden lg:block ">
                  <motion.img
                    src="boomerimg.avif"
                    alt="Reveal"
                    className="w-[700px] lg:h-[550px] h-[650px] object-cover origin-top shadow-lg"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                </div>

                <div className="bg-gray-300 md:ml-10 px-3"></div>

                <motion.div
                  className="w-full sm:h-[500px] lg:h-[400px] h-[500px] flex md:justify-center flex-col lg:ml-5"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-gray-700">21 September, 2025</p>
                  <img className="w-8 h-8 mt-3" src="boomerlogo.svg" alt="logo" />
                  <p className="text-black mt-10 font-semibold md:text-3xl text-xl">
                    Pointer has been a great tool for our businesses. We wanted to
                    find an all-in-one solution that was seamless for clients to use,
                    and the team has been a great resource when we have questions or
                    recommendations!
                  </p>

                  <div className="flex flex-row justify-between px-10">
                    <div>
                      <p className="text-black text-xl mt-20">Savannah Nguyen</p>
                      <p className="text-gray-300">Marketing Coordinator</p>
                    </div>
                    <img className="h-20 w-30 mt-20" src="boomer.svg" alt="brand" />
                  </div>
                </motion.div>
              </div>
            </CarouselItem>

           
            <CarouselItem>
              <div className="bg-gray-100 w-full flex md:flex-row justify-center items-center">
                <div className="sm:hidden hidden lg:block ">
                  <motion.img
                    src="boomerimg.avif"
                    alt="Reveal"
                    className="w-[700px] lg:h-[550px] h-[650px] object-cover origin-top shadow-lg"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                </div>

                <div className="bg-gray-300 md:ml-10 px-3"></div>

                <motion.div
                  className="w-full sm:h-[500px] lg:h-[400px] h-[500px] flex md:justify-center flex-col lg:ml-5"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-gray-700">15 October, 2025</p>
                  <img className="w-8 h-8 mt-3" src="boomerlogo.svg" alt="logo" />
                  <p className="text-black mt-10 font-semibold md:text-3xl text-xl">
                    The Pointer platform has simplified our workflow massively.
                    Our clients find it intuitive, and the customer support team
                    has been absolutely wonderful!
                  </p>

                  <div className="flex flex-row justify-between px-10">
                    <div>
                      <p className="text-black text-xl mt-20">Cameron Williamson</p>
                      <p className="text-gray-300">Product Manager</p>
                    </div>
                    <img className="h-20 w-30 mt-20" src="boomer.svg" alt="brand" />
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          </CarouselContent>

         
          <CarouselPrevious className="bg-gray-100 text-black border-gray-300" />
          <CarouselNext className="bg-gray-100  text-black border-gray-300"/>
        </Carousel>
      </div>
    </div>
  );
}

export default Boomer;
