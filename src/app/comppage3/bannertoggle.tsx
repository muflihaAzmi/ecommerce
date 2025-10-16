

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  logo: ReactNode;
  title: string;
  description: string;
}

// Animated Counter Component
function AnimatedCounter({ value }: { value: string }) {
  // Extract number and any suffix (like %)
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <h2 className="font-bold text-5xl">{value}</h2>;
  
  const number = parseInt(match[1]);
  const suffix = match[2];
  const digits = number.toString().split("").map(Number);

  return (
    <h2 className="font-bold text-5xl flex">
      {digits.map((digit, idx) => {
        // First digit scrolls top to bottom, second scrolls bottom to top
        const scrollTopToBottom = idx % 2 === 0;
        
        // Create numbers 0-9 repeated multiple times
        const scrollNumbers = Array.from({ length: 50 }, (_, i) => i % 10 +1);
        
        let numbersToRender: number[];
        let targetIndex: number;
        
        if (scrollTopToBottom) {
          // Top to bottom scrolling
          numbersToRender = scrollNumbers;
          // Find the last occurrence of our target digit
          targetIndex = -1;
          for (let i = numbersToRender.length - 1; i >= 0; i--) {
            if (numbersToRender[i] === digit) {
              targetIndex = i;
              break;
            }
          }
        } else {
          // Bottom to top scrolling
          numbersToRender = [...scrollNumbers].reverse();
          // Find the first occurrence of our target digit
          targetIndex = numbersToRender.indexOf(digit);
        }
        
        const finalY = -targetIndex * 3.5; // 3.5rem per number
        const initialY = scrollTopToBottom ? 1 : -(numbersToRender.length - 1) * 3.5;

        return (
          <div key={idx} className="relative h-[3.5rem] w-[2.5rem] overflow-hidden">
            <motion.div
              initial={{ y: `${initialY}rem` }}
              animate={{ y: `${finalY}rem` }}
              transition={{ 
                duration: 2.9,
                ease: "easeInOut"
              }}
            >
              {numbersToRender.map((n, i) => (
                <div 
                  key={i} 
                  className="h-[3.5rem] flex items-center justify-center"
                >
                  {n}
                </div>
              ))}
            </motion.div>
          </div>
        );
      })}
      <span>{suffix}</span>
    </h2>
  );
}

function Inforoll({ logo, title, description }: InfoCardProps) {
  return (
    <div>
      <div className="w-full md:w-[300px] text-black px-5 flex  justify-center flex-col gap-4 items-center">
        <div>{logo}</div>
        <AnimatedCounter value={title} />
        <p className="text-gray-600 text-2xl">{description}</p>
      </div>
    </div>
  );
}

function Bannertoggle() {
  const Bannerlogo = [
    {
      image: "/folder.svg",
      title: "35%",
      description: "Increase in Retention",
    },
    {
      image: "/folder.svg",
      title: "42%",
      description: "Revenue Growth",
    },
    {
      image: "/folder.svg",
      title: "98%",
      description: "Customer Satisf",
    },
    {
      image: "/folder.svg",
      title: "67%",
      description: "Efficiency Boost",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center mt-20 gap-8 items-center">
        {Bannerlogo.map((item, index) => (
          <Inforoll
            key={index}
            logo={<img src={item.image} alt={item.title} className="w-12 h-12" />}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Bannertoggle;