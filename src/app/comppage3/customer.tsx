import { motion } from "motion/react";
import React from "react";

function Customer() {
  return (
    <div>
      <div className="w-full md:px-30 min-h-screen px-4">
        <p className="text-black md:text-5xl text-xl flex justify-center items-center mt-10 font-semibold">
          What our customers say
        </p>
        <div className="mt-10 bg-gray-100 w-full flex md:flex-row justify-center items-center">
          <div className="w-1/3 hidden md:block ">
            <motion.img
              src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e1ed8c1c3d8962bd591fae_image%20(3).avif"
              alt="Reveal"
              className="w-[450px] h-[550px] object-cover origin-top  shadow-lg"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />{" "}
          </div>
          <div className="bg-gray-300 w-[0.5px] md:ml-10 px-3"></div>
          
          <motion.div className="md:w-[700px] w-full md:h-[400] h-[450px] flex md:justify-center flex-col  md:ml-10  "
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
