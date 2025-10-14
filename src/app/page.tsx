"use client";
import { MoveRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Build from "./homepage/page";

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
    
  ];

  const { scrollYProgress } = useScroll();

  // Scale up smoothly
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Move video down more in final state
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 750]);

  // Move video left in initial state, then center in final
  const x = useTransform(scrollYProgress, [0, 0.5], [70, 0]);

  // Expand width to full
  const width = useTransform(scrollYProgress, [0, 0.5], ["45%", "100%"]);

  // Expand height
  const height = useTransform(scrollYProgress, [0, 0.5], ["300px", "600px"]);

  // Adjust border radius (optional - makes it go from rounded to sharp)
  // const borderRadius = useTransform(scrollYProgress, [0, 0.5], [24, 0]);

  return (
    <div>
      <section className=" container min-h-[200vh] md:p-10 pl-5 pr-5 pt-10 bg-white w-full relative">
        <div className="h-[100px] flex  md:px-5 px-5 relative">
          <motion.div
            className="w-full max-w-[600px] flex flex-col gap-4 z-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-row bg-white border border-gray-200 rounded-3xl w-60 gap-2 justify-center items-center ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
              </svg>
              <p className="text-black text-[15px] font-medium">
                BEST BUSINESS WEBSITE
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="md:text-[50px] sm:text-[40px] text-[30px] font-semibold text-black leading-tight">
                Powering every part of your accounting operations.
              </h1>
              <p className="md:text-[18px] sm:text-[15px] text-[12px] text-gray-600">
                Built by entrepreneurs just like you to provide a better
                accounting solution for small businesses.
              </p>
              <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
                <button className="bg-white text-black px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
                  Book a Demo
                </button>
                <MoveRight className="mr-4 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-3 top-0 overflow-hidden "
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
        </div>
      </section> 
      <div className="container mx-auto overflow-hidden mygradient  ">
        <div className="flex justify-center gap-9 ">
          <motion.div
            className="flex flex-shrink-0 h-[50px] gap-9 justify-center  "
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease:"linear" }}
          >
            {slider.map((logo, index) => {
              return <img src={logo} key={index}></img>;
            })}
          </motion.div>
          <motion.div
            className="flex flex-shrink-0 h-[50px] gap-9 justify-center  "
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease:"linear" }}
          >
            {slider.map((logo, index) => {
              return <img src={logo} key={index}></img>;
            })}
          </motion.div>
        
        </div>
      </div>
      <Build/>
     
    </div>
  );
}
