import React, { useEffect, useState } from 'react';
import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

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
      <main className="container mx-auto px-4 py-16 relative ">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact <span className="text-[#FFA6F8]">Us</span>
        </motion.h1>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 mb-8 text-center">
            Have a question or need assistance? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-[#fff] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA6F8] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-[#fff] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA6F8] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-[#fff] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA6F8] focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#FFA6F8] text-[#0c0510] py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

