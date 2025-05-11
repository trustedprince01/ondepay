import React, { useState } from "react";
import { Mail, Phone, Twitter, Linkedin, Facebook } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#0D0510] text-gray-300 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} className="w-[7rem]" alt="" />
            </div>
            <p className="text-sm text-gray-400">
              At Ondepay, our mission is to revolutionize the payment landscape
              in Africa. We empower individuals and businesses with fast, easy,
              and flawless payment solutions. Our vision is to become the most
              trusted and beloved payment platform across Africa, known for its
              reliability and user-friendly experience.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@ondepay.com"
                className="flex items-center space-x-2 text-sm hover:text-purple-400"
              >
                <Mail className="w-4 h-4" />
                <span>support@ondepay.com</span>
              </a>
              <a
                href="tel:+23409034281922"
                className="flex items-center space-x-2 text-sm hover:text-purple-400"
              >
                <Phone className="w-4 h-4" />
                <span>+243 9034281922</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                {" "}
                <Link to="/about" className="text-sm hover:text-purple-400">
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/features" className="text-sm hover:text-purple-400">
                  Features
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/faq" className="text-sm hover:text-purple-400">
                  FAQs
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/contact" className="text-sm hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm hover:text-purple-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-purple-400">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Newsletter Subscription
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Sign up for updates on new features and offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2a2435] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-purple-500 text-white rounded-md text-sm hover:bg-purple-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 flex flex-col justify-start text-start">
            Copyright © 2025 Ondepay. <a href="https://primescaletechnologies.com" className="text-[#FFA6F8]" target="_blank">Powered by PrimeScale Technologies</a> All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
