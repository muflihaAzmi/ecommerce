import { motion } from "motion/react";
import React from "react";

function Customer() {
  return (
    <div className="container mx-auto lg:mt-50 h-screen mt-250 sm:mt-120">
      <div className="w-full md:px-30 px-5 ">
        <p className="text-black lg:text-5xl sm:text-4xl text-xl flex justify-center items-center mt-10 font-semibold">
          What our customers say
        </p>
        <div className="mt-10 bg-gray-100 w-full  flex md:flex-row justify-center items-center">
          <div className="sm:hidden hidden lg:block ">
            <motion.img
              src="customer.avif"
              alt="Reveal"
              className="w-[450px] h-[550px] object-cover origin-top  shadow-lg"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />{" "}
          </div>
          <div className="bg-gray-300  md:ml-10 px-3"></div>
          
          <motion.div className=":w-[700px] w-full md:h-[400] h-[450px] flex md:justify-center flex-col  lg:ml-10  "
          initial={{y:-20 ,opacity:0}} whileInView={{y:0,opacity:1}}
          viewport={{once:true}}transition={{duration:0.8}}>
            <h1 className="text-3xl font-bold text-black mt-10 ">Primex</h1>
            <p className="text-black mt-10 font-semibold md:text-3xl text-xl ">
              Pointer has been a great tool for our businesses. We wanted to
              find an all in one solution that was seam for clients to use and
              the team has been a great resource when we have questions or
              recommendations!
            </p>
          </motion.div>
        
        </div>
      </div>
    </div>
  );
}

export default Customer;
