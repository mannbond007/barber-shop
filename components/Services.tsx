"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Classic Haircut",
    price: "$25",
    description: "Precision cut with modern styling",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&h=500&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Hot Towel Shave",
    price: "$30",
    description: "Traditional straight razor shave",
    image:
      "https://images.unsplash.com/photo-1553519367-2b1993d992dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdCUyMHRvd2VsJTIwc2hhdmV8ZW58MHwwfDB8fHww",
    span: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    title: "Beard Grooming",
    price: "$20",
    description: "Shape and trim your beard",
    image:
      "https://images.unsplash.com/photo-1599912676162-22aaded007d0?w=500&h=500&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Hair Wash",
    price: "$15",
    description: "Deep cleansing hair treatment",
    image:
      "https://images.unsplash.com/photo-1578147221104-5b8a8700d5d8?w=500&h=500&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Facial",
    price: "$35",
    description: "Relaxing facial treatment",
    image:
      "https://images.unsplash.com/photo-1540575467063-178f50c2dff0?w=500&h=500&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Scalp Therapy",
    price: "$40",
    description: "Rejuvenating scalp massage and hydration",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Styling",
    price: "$10",
    description: "Hair styling and finishing",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Premium <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafted experiences for the discerning gentleman. Each service
            tailored to perfection.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.span} group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/50 transition duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Price Badge */}
                <div className="flex justify-between items-start">
                  <div></div>
                  <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.price}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-2"
                  >
                    <button className="text-[#D4AF37] font-semibold text-sm hover:text-white transition-colors duration-300 flex items-center gap-2">
                      Learn More
                      <span>→</span>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
