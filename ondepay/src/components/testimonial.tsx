import React from "react";
import { motion } from "framer-motion";
import featureimage from "../assets/feature.png";
import { Quote } from "lucide-react";

const TestimonialData = () => [
  {
    content:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "Robinson Honour",
  },
  {
    content:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "Tolu",
  },
  {
    content:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "PRisca",
  },
];

const Testimonial: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div className="bg-[#0c0510] relative overflow-hidden pb-[5rem]">
      <img src={featureimage} className="w-full h-full absolute" alt="" />
      <div className="] px-4 md:px-8">
        <motion.div
          variants={itemVariants}
          className="max-w-6xl py-[2rem] mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl text-center  bold md:text-3xl   mb-2 text-white tracking-tight"
          >
            Testimonials
          </motion.h1>
          <motion.h6
            variants={itemVariants}
            className="text-sm text-center md:text-sm   text-gray-400 tracking-tight"
          >
            Testimonials
          </motion.h6>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {TestimonialData().map((data, index) => {
            return (
              <div
                key={index}
                className="bg-[#150d18] backdrop-blur-sm text-center rounded-[24px] p-8"
              >
                <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-[#B828AC] flex justify-center flex-col items-center">
                  <Quote color="white" />
                </div>
                <p className="text-gray-300 my-8">{data.content}</p>
                <div className="relative mb-2 my-1 flex items-center justify-center">
                  <p className="text-white">~{data.author}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
