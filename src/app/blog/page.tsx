"use client";

import React, {  useState } from "react";
import Marketing from "./Marketing";
import Image from "next/image";
import { spaceGrotesk } from "../ui/components";

import { motion } from "motion/react";

function BlogOne() {
  const [Blog, SetBlog] = useState("marketing");
  const [hovered, setHovered] = useState(1);

  const bgimages = [
    {
      bgimage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bddbef82fdd29e474963_image-5.webp",
      name: "marketing",
    },
    {
      bgimage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bdf697fb59e4d0130021_image-6.webp",
      name: "marketing",
    },
    {
      bgimage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bd9234dd52c325ed139b_image-3.webp",
      name: "marketing",
    },

    {
      bgimage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bddbef82fdd29e474963_image-5.webp",
      name: "marketing",
    },
  ];
  const newsImage = [
    {
      bgImage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/682d7f8c2e68540bed15d51a_image-11.webp",
      name: "News",
      name2: "business",
      name3: "Research",
      name4: "sales",
    },
    {
      bgImage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/682d7ecda080e4b7ac6cc445_image-7.webp",
      name: "News",
      name2: "business",
      name3: "Research",
      name4: "sales",
    },
  ];
  const technolgy = [
    {
      bgImage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bdc67acfa8915df771fe_image-4.webp",
      bgTwoImage:
        "https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/682d7f66b6365ca5f16d1679_image-12.webp",
      name: "Technology",
      name2: "startup",
    },
  ];

  return (
    <div className="w-full ">
      <div className="w-[90%] md:px-13 mt-10 container mx-auto border-l-1 border-r-1  ">
        <h1
          className={`text-black text-6xl flex justify-center mt-10 tracking-tighter [word-spacing:0.01px] leading-tight ${spaceGrotesk.className}`}
        >
          Our pointer’s blogs
        </h1>
        <div className="flex md:flex-row flex-col  gap-4 h-[450px] overflow-hidden mt-10 min-h-screen">
          <div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(0)}
            className={`bg-cover bg-center h-[450px] 
          ${hovered === 2 ? "md:w-2/4" : "md:w-3/4"} w-full relative`}
            style={{
              backgroundImage: `url("https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bdc67acfa8915df771fe_image-4.webp")`,
            }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={
                hovered === 1 || hovered === null
                  ? { x: 0, opacity: 1 }
                  : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              className="absolute bottom-10 left-10 bg-white md:w-[400px] w-[280px] h-[350px] flex flex-col p-5 shadow-lg rounded"
            >
              <div className="flex flex-row justify-between items-center mb-3">
                <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-3xl">
                  MARKETING
                </button>
                <h1 className="text-black text-sm">March 27, 2025</h1>
              </div>
              <h1 className="text-2xl font-semibold mb-4 text-black md:mt-10">
                Implementing effective & fair workload distribution in your
                product team.
              </h1>
              <div className="flex items-center gap-3 md:mt-10">
              <Image
  src="https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e3ebbccc71de8744fd5fd9_Ellipse%206.webp"
  alt="Eleanor Pena"
  width={40}
  height={40}
  className="rounded-full object-cover"
/>

                <div className="text-black flex flex-col text-sm">
                  <h1 className="font-semibold">Eleanor Pena ,</h1>
                  <h1>AI Engineer</h1>
                </div>
                <div className="flex flex-end ml-20 text-gray-700">
                  <h1>10 min read</h1>
                </div>
              </div>
            </motion.div>
          </div>

          <div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(0)}
            className={`bg-cover bg-center h-[450px]
          ${
            hovered === 1 || hovered === null ? "md:w-2/4" : "md:w-3/4"
          } w-full relative`}
            style={{
              backgroundImage: `url("https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bdc67acfa8915df771fe_image-4.webp")`,
            }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={
                hovered === 2 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              className="absolute bottom-10 left-10 bg-white md:w-[400px] w-[280px] h-[350px] flex flex-col p-5 shadow-lg rounded"
            >
              <div className="flex flex-row justify-between items-center mb-3">
                <button className="bg-pink-100 text-pink-600 px-3 py-1 rounded-3xl">
                  TECHNOLOGY
                </button>
                <h1 className="text-black text-sm">March 27, 2025</h1>
              </div>
              <h1 className="text-2xl font-semibold mb-4 text-black md:mt-10">
                Implementing effective & fair workload distribution in your
                product team.
              </h1>
              <div className="flex items-center gap-3 md:mt-10">
               <Image
  src="https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e3ebbccc71de8744fd5fd9_Ellipse%206.webp"
  alt="Eleanor Pena"
  width={40}
  height={40}
  className="rounded-full object-cover"
/>

                <div className="text-black flex flex-col text-sm">
                  <h1 className="font-semibold">Eleanor Pena ,</h1>
                  <h1>AI Engineer</h1>
                </div>
                <div className="flex flex-end ml-20 text-gray-700">
                  <h1>10 min read</h1>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="">
          <h1
            className={`text-black text-6xl tracking-tighter min-h-sreen [word-spacing:0.01px] leading-tight ${spaceGrotesk.className}`}
          >
            Latest blog & articles
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:mr-90 grid-cols-1">
          <div className="md:flex ml-10 mt-20  grid grid-rows-2 gap-5">
            <div className="md:flex md:flex-col md:w-[350px] h-fit  text-center font-semibold text-[15px]">
              <button
                onClick={() => {
                  SetBlog("marketing");
                }}
                className={`border-b border-gray-300  p-2 ${
                  Blog == "marketing"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                MARKETING
              </button>
              <button
                onClick={() => SetBlog("Technology")}
                className={`border-b border-gray-300 p-2 ${
                  Blog == "Technology"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                TECHNOLOGY
              </button>
              <button
                onClick={() => SetBlog("startup")}
                className={`border-b  border-gray-300 p-2 ${
                  Blog == "startup"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                STARTUP
              </button>
              <button
                onClick={() => SetBlog("Business")}
                className={`border-b  border-gray-300 p-2 ${
                  Blog == "Business"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                BUSINESS
              </button>
              <button
                onClick={() => SetBlog("NEWS")}
                className={`border-b  border-gray-300 p-2 ${
                  Blog == "NEWS"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                NEWS
              </button>
              <button
                onClick={() => SetBlog("Research")}
                className={`border-b  border-gray-300 p-2 ${
                  Blog == "Research"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                RESEARCH
              </button>
              <button
                onClick={() => SetBlog("sales")}
                className={`border-b   border-gray-300 p-2 ${
                  Blog == "sales"
                    ? "bg-gray-300 text-black "
                    : "text-gray-300 bg-gray-100 "
                }`}
              >
                SALES
              </button>
            </div>
          </div>

          <div className="h-[900px] md:w-[900px] overflow-y-scroll no-scrollbar">
            {Blog === "NEWS" &&
              newsImage.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgImage}
                  cardname={items.name}
                />
              ))}
            {Blog === "Business" &&
              newsImage.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgImage}
                  cardname={items.name2}
                />
              ))}
            {Blog === "Research" &&
              newsImage.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgImage}
                  cardname={items.name3}
                />
              ))}
            {Blog === "sales" &&
              newsImage.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgImage}
                  cardname={items.name4}
                />
              ))}
            {Blog === "Technology" &&
              technolgy.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgImage}
                  cardname={items.name}
                />
              ))}
            {Blog === "startup" &&
              technolgy.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgTwoImage}
                  cardname={items.name2}
                />
              ))}

            {Blog === "marketing" &&
              bgimages.map((items, index) => (
                <Marketing
                  key={index}
                  backimage={items.bgimage}
                  cardname={items.name}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogOne;
