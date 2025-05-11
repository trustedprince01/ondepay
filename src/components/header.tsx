import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-full py-[1.5rem] px-[1.5rem]">
          <nav className="flex items-center justify-between px-[.5rem]">
            <div className="flex items-center gap-2">
              <Link to={"/"}>
                <img src={logo} className="w-[7rem]" alt="" />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                About
              </Link>
              <Link
                to="/features"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Features
              </Link>
              <Link
                to="/faq"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </div>

            <Link to="/download" className="bg-[#FFA6F8] hover:bg-pink-500 text-black rounded-full px-6 py-3 text-sm font-normal transition-colors">
              Download
            </Link>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </nav>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FFA6F8] p-4 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <Link to="/" className="block text-black py-2">
          Home
        </Link>
        <Link to="/about" className="block text-black py-2">
          About
        </Link>
        <Link to="/features" className="block text-black py-2">
          Features
        </Link>
        <Link to="/faq" className="block text-black py-2">
          FAQs
        </Link>
        <Link to="/contact" className="block text-black py-2">
          Contact
        </Link>
        
      </div>
    </header>
  );
}

export default Navbar;
