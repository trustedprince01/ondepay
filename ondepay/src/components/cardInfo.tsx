import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cardinfo from "../assets/cardinfo.png";
import { Link } from "react-router-dom";
 
const CardInfo = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-[2.5rem] px-[2rem] py-[2rem] md:px-0 md:py-[5rem] bg-gradient-to-b from-[#211123] to-[#0d0511]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center bold md:text-3xl mb-5 text-white tracking-tight">
          Our{" "}
          <span className="text-[#FFA6F8]">Services</span>
        </h1>
      </div>
      <section className="container mx-auto bg-[#ccc]/5 rounded-[1rem] p-[2rem] md:p-[2rem] md:py-[2rem]">
        <div className="grid lg:grid-cols-2 md:px-[2.5rem] gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl text-white font-bold mb-8">
              Virtual Dollar {" "}
              <span className="text-[#FFA6F8]">Cards</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Use our virtual dollar cards for all your online transactions. Ideal for shopping, subscriptions, and international payments.
            </p>
            <button className=" bg-[#FFA6F8] hover:bg-[#FFA6F8] text-black px-8 py-4 rounded-full text-sm flex items-center transition-colors">
            <Link to="/download" className="  flex">
              Download Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            </button>
          </div>
          <motion.div className="flex justify-center ">
            <img src={cardinfo} alt="" className=" md:h-[20rem] " />
          </motion.div>
        </div>
      </section>
     
      <section className="container mx-auto bg-[#ccc]/5 rounded-[1rem] p-[2rem] md:p-[2rem] md:py-[2rem]">
        <div className="grid lg:grid-cols-2 md:px-[2.5rem] gap-12 items-center">
          <motion.div className="flex justify-center ">
            <img src={cardinfo} alt="" className=" md:h-[20rem] " />
          </motion.div>
          <div className="max-w-xl">
            <h1 className="text-3xl text-white font-bold mb-8">
              Bill {" "}
              <span className="text-[#FFA6F8]">Payments</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Use our App to conveniently pay for utilities, subscriptions, and more.
            </p>
            <button className=" bg-[#FFA6F8] hover:bg-[#FFA6F8] text-black px-8 py-4 rounded-full text-sm flex items-center transition-colors">
            <Link to="/download" className="  flex">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default CardInfo;
