"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    quote: "The best haircut I've ever had. Highly recommend!",
  },

  { name: "Jane Smith", quote: "Professional and relaxing atmosphere." },

  { name: "Mike Johnson", quote: "Great attention to detail." },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-[#A1A1A1] italic mb-4">
                "{testimonial.quote}"
              </p>

              <p className="text-white font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
