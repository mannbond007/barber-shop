"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Classic Haircut",
    price: "$25",
    description: "Precision cut with modern styling",
  },

  {
    title: "Hot Towel Shave",
    price: "$30",
    description: "Traditional straight razor shave",
  },

  {
    title: "Beard Grooming",
    price: "$20",
    description: "Shape and trim your beard",
  },

  {
    title: "Hair Wash",
    price: "$15",
    description: "Deep cleansing hair treatment",
  },

  { title: "Facial", price: "$35", description: "Relaxing facial treatment" },

  { title: "Styling", price: "$10", description: "Hair styling and finishing" },
];

const Services = () => {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-[#A1A1A1] mb-4">{service.description}</p>

              <p className="text-[#D4AF37] font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
