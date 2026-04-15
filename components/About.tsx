"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            alt="Professional barber at work"
            className="w-full h-96 object-cover rounded-xl"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Our Barbershop</h2>

          <p className="text-[#A1A1A1] leading-relaxed">
            We are a premium barbershop dedicated to providing exceptional
            grooming services in a luxurious environment. Our skilled barbers
            use the finest tools and techniques to ensure you leave looking and
            feeling your best. With years of experience and a passion for the
            craft, we offer a range of services tailored to your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
