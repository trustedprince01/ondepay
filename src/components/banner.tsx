import React from "react";
import grid from "../assets/grid.png";
import phone from "../assets/phone.png";
import star from "../assets/star.png";
import { ArrowRightIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BannerComponent: React.FC = () => {
  return (
    <div className="relative min-h-[30rem] md:min-h-[55rem] w-full overflow-hidden">
      <div className="absolute inset-0 h-auto top-0 flex justify-center w-full">
        <div className="relative max-w-4xl -bottom-10 h-auto flex flex-col w-full justify-start items-start">
          <img
            src={grid}
            className="w-full object-cover opacity-15"
            alt="Grid Background"
          />
        </div>
      </div>

      <div className="relative flex flex-col pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="max-w-xl mx-auto text-center mb-[1.5rem]">
            <div className="bg-white/5 flex items-center justify-center text-[#FFA6F8] gap-5 w-fit backdrop-blur-md rounded-full py-[1rem] px-[2rem] mx-auto">
              <Star />
              <motion.h5
                className="text-[#FFA6F8] whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Customized card for you
              </motion.h5>
              <Star />
            </div>
          </div>

          <motion.h1
            className="text-3xl sm:text-3xl bold md:text-6xl mb-[1.5rem] text-white tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Experience Financial
            <span className="text-[#FFA6F8]"> Freedom</span> with
            <span className="text-[#FFA6F8]"> Ondepay</span>
          </motion.h1>

          <motion.p
            className="text-md text-gray-400 mb-[1.5rem] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Welcome to Ondepay, where every transaction is smooth, secure, and
            speedy. Designed for entrepreneurs, freelancers, and general users.
          </motion.p>

          <div className="flex justify-center items-center gap-3">
            <motion.button
              className="flex gap-3 justify-center items-center bg-[#FFA6F8] text-black rounded-[3rem] font-medium text-sm
                         shadow-lg hover:shadow-xl hover:bg-black hover:text-[#FFA6F8] hover:bg-opacity-95 "
              style={{
                backdropFilter: "blur(10px)",
                textShadow: "0 0 1px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              
            >
              <Link
                to="/download"
                className="flex gap-3  px-10 py-3 justify-center items-center"
              >
                Download Now <ArrowRightIcon size={15} />
              </Link>
            </motion.button>

            <motion.button
              className="hidden md:flex gap-3 justify-center items-center bg-transparent border-white border-2 text-white  rounded-[3rem] font-medium text-sm
                         shadow-lg hover:shadow-xl hover:bg-white hover:text-black hover:bg-opacity-95"
              style={{
                backdropFilter: "blur(10px)",
                textShadow: "0 0 1px rgba(0,0,0,0.1)",
              }}
              
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              
              
            >
              <Link
                to="/about"
                className="flex gap-3  px-10 py-3 justify-center items-center"
              >
                Learn More <ArrowRightIcon size={15} />
              </Link>
            </motion.button>
          </div>

          <div className="mt-5 flex flex-col items-center justify-center">
            <img src={phone} alt="" />
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((data, index) => {
          const positions = [
            "w-[2rem] top-[1%] md:top-[10%] left-[10%]",
            "w-5 md:w-[2.5rem] top-[18%] md:top-[10%] right-[10%]",
            "hidden md:flex w-[1.2rem] top-[40%] left-[25%]",
            "w-[2rem] bottom-[10%] left-[10%]",
            "w-[2rem] bottom-[10%] right-[10%]",
            "hidden md:flex w-[2rem] top-[25%] right-[40%]",
          ];

          return (
            <motion.img
              src={star}
              key={data}
              className={`${positions[index]} absolute`}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BannerComponent;