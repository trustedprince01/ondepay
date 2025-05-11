import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import FAQSection from "../components/faq";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0c0510] text-white">
      <div
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <main className="container mx-auto px-4 py-16 relative">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About <span className="text-[#FFA6F8]">OndePay</span>
        </motion.h1>

        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            At Ondepay, our mission is to revolutionize the payment landscape in
            Africa. We empower individuals and businesses with fast, easy, and
            flawless payment solutions. Our vision is to become the most trusted
            and beloved payment platform across Africa, known for its
            reliability and user-friendly experience.{" "}
          </p>
          
        </motion.section>

        <FAQSection />
        
      </main>
      <Footer />
    </div>
  );
}

export default About;
