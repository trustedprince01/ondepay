import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0c0510] text-white">
      <div 
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: 'blur(120px)',
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <main className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-4 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          4<span className="text-[#FFA6F8]">0</span>4
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Oops! Page not found
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-300 mb-8 text-center max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <Link to="/" className="bg-[#FFA6F8] text-[#0c0510] py-2 px-6 rounded-full font-semibold hover:bg-opacity-80 transition-colors">
            Go to Homepage
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;

