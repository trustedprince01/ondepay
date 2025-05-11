import HeaderComponent from "../components/header";
import FeaturesSection from "../components/features"; 
import Footer from "../components/footer";
import { useEffect } from "react";

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen">
      <div 
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: 'blur(120px)',
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <FeaturesSection />
      
      <Footer />
    </div>
  );
}

export default Features;