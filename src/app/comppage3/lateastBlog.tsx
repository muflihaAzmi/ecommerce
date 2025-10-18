import { FileText, MoveRight } from "lucide-react";


import React, { ReactNode, useState } from "react";
import { motion } from "motion/react";

function LeatestBlog() {
  
  
//   return (
//     <div className="w-full min-h-screen">
//     <div className=" container mx-auto md:px-20 min-h-screen md:mt-30 flex flex-col gap-16">
//       <div className="flex md:flex-row md:justify-between flex-col p-5 ">
//         <h2 className="text-black md:text-5xl font-semibold text-xl ">
//           Receive our latest blog & articles
//         </h2>
//         <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
//           <button className="bg-white text-black px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
//             Book a Demo
//           </button>
//           <MoveRight className="mr-4 text-white" />
//         </div>
//       </div>
//      <div className="flex gap-6 justify-center items-center min-h-screen bg-gray-100">
//       {/* Image 1 */}
//       <div className="relative group">
//         <img
//           src="/proposal.avif"
//           alt="Image 1"
//           className="w-64 h-64 object-cover rounded-xl transition-all duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 border-4 border-transparent rounded-xl transition-all duration-500 group-hover:border-blue-500"></div>
//       </div>

//       {/* Image 2 */}
//       <div className="relative group">
//         <img
//           src="/"
//           alt="Image 2"
//           className="w-64 h-64 object-cover rounded-xl transition-all duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 border-4 border-transparent rounded-xl transition-all duration-500 group-hover:border-pink-500"></div>
//       </div>
//     </div>
//       </div>
      
//     </div>
//   );
// }


// export default function HoverImageBox() {
 const [active, setActive] = useState(null);

  const items = [
    {
      id: 1,
      img: "/building2.jpg",
      title: "Fair Workload Distribution",
      desc: "Balance your team's productivity effectively.",
      bg: "bg-black",
    },
    {
      id: 2,
      img: "/buildins.jpg",
      title: "Strong Product Culture",
      desc: "Create a team that thrives on innovation.",
      bg: "bg-black",
    },
  ];

  return (
     <div className="flex md:flex-row flex-col md:justify-center items-center h-screen md:px-30 gap-6  ">
      {items.map((item,) => (
        <motion.div
          key={item.id}
          onHoverStart={() => setActive(item.id)}
          onHoverEnd={() => setActive(null)}
          animate={{
            width: active === item.id ? "75%" : "50%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative  overflow-hidden cursor-pointer shadow-lg h-[420px]"
        >
          {/* Image */}
          <motion.img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              // filter: active === item.id ? "brightness(100%)" : "brightness(100%)",
              scale: active === item.id ? 1.02 : 1,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Content Box */}
          <motion.div
            className={`absolute bottom-30 left-30 w-[300px] text-white ${item.bg} p-6`}
            initial={{ opacity: 0, x: -50, height: 0 }}
            animate={{
              opacity: active === item.id ? 1 : 0,
              x: active === item.id ? 0 : 50,
              height: active === item.id ? "auto" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-sm mt-2">{item.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default LeatestBlog;