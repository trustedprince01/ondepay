import React from "react";
import { motion } from "framer-motion";
import featureimage from "../assets/feature.png";
import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";

interface FeatureCardProps {
  title: [string, string];
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-[#150d18] backdrop-blur-sm cursor-pointer text-center rounded-[24px] p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl mb-4">
        <span className="text-white">{title[0]}</span>{" "}
        <span className="text-[#FFA6F8]">{title[1]}</span>
      </h3>
      <div className="relative h-[5rem] my-5 flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="absolute w-[5rem] bottom-0"
          aria-hidden="true"
        />
      </div>
      <p className="text-gray-300 my-8">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: ["Versatile", "Use"],
      description: "Use your digital card for online purchases, in-store purchases, and more",
      image: feature1,
    },
    {
      title: ["Easy", "Management"],
      description: "Manage your digital card and transactions easily through our user-friendly app.",
      image: feature2,
    },
    {
      title: ["Accepted", "Everywhere"],
      description: "Use your digital card at any merchant that accepts Visa or Mastercard.",
      image: feature3,
    },
    {
      title: ["Customer", "Support"],
      description: "Our team is ready to help you with any questions or issues you may have.",
      image: feature4,
    },
  ];

  return (
    <div className="bg-[#0c0510] min-h-screen relative overflow-hidden pb-[5rem]">
      <img src={featureimage} className="w-full h-full absolute" alt="" />
      <div className="pt-[5rem] px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl text-center bold md:text-3xl mb-16 text-white tracking-tight">
            Flex Your Digital Wealth with{" "}
            <span className="text-[#FFA6F8]">OndePay</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureCard key={index + 2} {...feature} />
            ))}
          </div>

          <motion.div
            className="bg-[#150d18] backdrop-blur-sm text-center rounded-[24px] p-8 lg:flex lg:flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl mb-4">
              <span className="text-white">Effortlessly</span>{" "}
              <span className="text-[#FFA6F8]">Manage Your Money</span>
            </h3>
            <p className="text-gray-300 my-8">
              Transfer funds between your{" "}
              <span className="text-[#FFA6F8]">bank account</span> or{" "}
              <span className="text-[#FFA6F8]">wallet</span> with ease.
            </p>
            
            <div className="relative min-h-[15rem] flex justify-center flex-grow mt-8">
              <div className="absolute bottom-8">
                <img
                  src={feature5}
                  alt=""
                  className="w-[10rem] md:w-[20rem] h-auto"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;