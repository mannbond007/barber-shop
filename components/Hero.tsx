"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-20 min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundPosition: "center 35%",
        }}
      />

      {/* Luxury overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Gold texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.6)_1px,transparent_0)] bg-[length:44px_44px]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 backdrop-blur-md">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Premium Experience
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-[#D4AF37] to-[#FFE082] bg-clip-text text-transparent drop-shadow-2xl block">
            Luxury Grooming
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-8"
        >
          Experience unparalleled craftsmanship where tradition meets modern
          elegance. Every detail perfected for the discerning gentleman.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] px-8 py-4 text-base font-bold text-black shadow-2xl transition duration-300 hover:scale-105 hover:shadow-[#D4AF37]/50">
              Book Your Experience
            </button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <button className="w-full rounded-full border-2 border-[#D4AF37] bg-white/5 px-8 py-4 text-base font-semibold text-[#D4AF37] backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:text-black">
              Explore Services
            </button>
          </Link>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            { value: "500+", label: "Happy Clients", icon: Users },
            { value: "10+", label: "Years Experience", icon: Clock },
            { value: "24/7", label: "Premium Service", icon: Sparkles },
          ].map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-white/8 to-white/5 px-8 py-8 backdrop-blur-md flex flex-col items-center hover:border-[#D4AF37]/50 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-6 w-full justify-center">
                <div className="h-16 w-16 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/25 to-[#D4AF37]/10 text-[#D4AF37] shadow-[0_8px_24px_rgba(212,175,55,0.25)] border border-[#D4AF37]/30">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-[#D4AF37]">{value}</div>
              </div>
              <div className="text-center text-sm tracking-widest text-gray-300 uppercase font-medium">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-[#D4AF37]/60">
          <motion.div
            className="mt-2 h-3 w-1 animate-bounce rounded-full bg-[#D4AF37]"
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
