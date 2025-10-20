"use client";
import { MoveRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Build from "./homepage/page";
import MainPacked from "./comppage2/mainpacked";
import Stack from "./comppage3/stack";
import Bannertoggle from "./comppage3/bannertoggle";
import Deliver from "./comppage3/Deliver";
import Packed from "./comppage3/packed";
import Customer from "./comppage3/customer";
import LeatestBlog from "./comppage3/lateastBlog";
import ImageRow from "./comppage3/banner2";
import Footer from "./footercomponents/footer2";
import Image from "next/image";

export default function Home() {
  const slider = [
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",

    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",

    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",

    
   
  ];

  const { scrollYProgress } = useScroll();

  // Scale up smoothly
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);

  // Move video down more in final state
  const y = useTransform(scrollYProgress, [0, 0.1], [40, 740]);

  // Move video left in initial state, then center in final
  const x = useTransform(scrollYProgress, [0, 0.1], [60, 0]);

  // Expand width to full
  const width = useTransform(scrollYProgress, [0, 0.1], ["45%", "100%"]);

  // Expand height
  const height = useTransform(scrollYProgress, [0, 0.1], ["300px", "600px"]);

  // Adjust border radius (optional - makes it go from rounded to sharp)
  // const borderRadius = useTransform(scrollYProgress, [0, 0.5], [24, 0]);

  return (
    <div>
      <div className=" w-full ">
        <section className="container mx-auto  md:min-h-[200lvh] min-h-[80lvh] lg:p-20 sm:p-8 md:pr-5 pt-10 bg-white  relative">
          <div className="h-[100px] flex  px-5 relative md:flex row flex-col ">
            <motion.div
              className="w-full max-w-[600px] flex flex-col gap-4 z-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-row bg-white border border-gray-200 rounded-3xl md:w-65 w-58 gap-2 justify-center items-center ">
                <Image  src="/rocket.svg"
                alt=""
                width={20}
                height={20}/>
                <p className="text-black md:text-[15px]  text-[10px] font-medium">
                  BEST BUSINESS WEBSITE
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="md:text-[50px] sm:text-[40px] text-[30px] font-semibold text-black leading-tight">
                  Powering every part of your accounting operations.
                </h1>
                <p className="md:text-[18px] sm:text-[15px] text-[15px] text-gray-600">
                  Built by entrepreneurs just like you to provide a better
                  accounting solution for small businesses.
                </p>
                <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
                  <button className="bg-white text-black px-6 py-2 text-semibold rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
                    <motion.h1
                   
                    >
                      Book a Demo
                    </motion.h1>
                  </button>
                  <MoveRight className="mr-4 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute right-3 top-0 overflow-hidden sm:hidden hidden lg:block "
              style={{
                scale,
                y,
                x,
                width,
                height,
                // borderRadius,
                zIndex: 5,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover  "
              >
                <source src="/nature.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className="lg:hidden mt-20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover  "
              >
                <source src="/nature.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </div>

       <div className="container mx-auto mygradient  overflow-hidden w-full mt-20">
        <div className="flex justify-center gap-9 ">
          <motion.div
            className="flex flex-shrink-0 h-[50px] gap-9 justify-center   "
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {slider.map((logo, index) => {
              return <img src={logo} key={index}></img>;
            })}
          </motion.div>
          <motion.div
            className="flex flex-shrink-0 h-[50px] gap-9 justify-center  "
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {slider.map((logo, index) => {
              return <img src={logo} key={index}></img>;
            })}
          </motion.div>
        </div>
      </div> 
      <Build />
      <MainPacked />
      <Stack />
      <Bannertoggle />
      <Deliver />
      <Packed />
      <Customer />
      <LeatestBlog />
      <ImageRow />
    </div>
  );
}
