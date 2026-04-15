"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-[#111] border border-[#1A1A1A] rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#111] border border-[#1A1A1A] rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-[#111] border border-[#1A1A1A] rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-3 rounded-xl font-semibold hover:bg-opacity-80 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
