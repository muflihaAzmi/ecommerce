import { motion } from "motion/react";
import React from "react";

function Customer() {
  return (
    <div>
      <div className="w-full px-30 min-h-screen">
        <p className="text-black text-5xl flex justify-center items-center mt-10">
          What our customers say
        </p>
        <div className="mt-10 bg-gray-100 w-full flex flex-row">
          <div className="w-1/3 ">
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
          <div className="bg-gray-300 w-[0.5px] ml-10"></div>
          
          <div className="w-[700px] h-[400] flex justify-center text-3xl items-center ml-10  ">
            <p className="text-black mt-10 font-medium ">
              Pointer has been a great tool for our businesses. We wanted to
              find an all in one solution that was seam for clients to use and
              the team has been a great resource when we have questions or
              recommendations!
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Customer;
