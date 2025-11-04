"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TextFade } from "./TextFade";
import { motion } from "framer-motion";

export default function AutoScaleCarousel({ slides, interval = 2000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(autoplay);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center justify-center h-screen">
        <>
          {slides.map((item, i) => (
            <motion.div
              key={item.src}
              className={`absolute inset-0 transition-all duration-3000 transform ${
                i === current ? "opacity-100 scale-110" : "opacity-0"
              }`}
              animate={i === current ? { scale: 1.2 } : {}}
              transition={{ ease: [1.5, 1.5, 1, 1], delay: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            </motion.div>
          ))}
          <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-white text-center">
            <TextFade
              direction="up"
              className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
            >
              <h1 className="text-7xl font-heading font-bold">
                Beautiful Interiors
              </h1>
              <p className="mt-3 text-xl md:text-2xl text-shadow-lg">
                Transform your home with elegant design
              </p>
            </TextFade>
          </div>
        </>
      </div>
    </div>
  );
}
