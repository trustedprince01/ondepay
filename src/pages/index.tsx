import { useEffect } from "react";
import Lenis, { LenisOptions } from "@studio-freight/lenis";
import BannerComponent from "../components/banner";
import HeaderComponent from "../components/header";
import FeaturesSection from "../components/features";
// import PartnersSection from "../components/partners";
import CardInfo from "../components/cardInfo";
import Testimonial from "../components/testimonial";
import FAQSection from "../components/faq";
import Footer from "../components/footer";

function App(): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical", 
      smooth: true, 
    } as LenisOptions);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.scrollTo(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <BannerComponent />
      {/* <PartnersSection /> */}
      <FeaturesSection />
      <CardInfo />
      <Testimonial />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;