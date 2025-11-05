"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ServicesTemplate = ({ pageData }) => {
  return (
    <section>
      <div className="h-[500px] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={pageData.heroImg}
            alt="Contact"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-background">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading pb-4">
              {pageData.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 h-1/2 gap-2 pt-2">
        {pageData.imageGallery.map((img: string, i: number) => (
          <div key={i} className="relative h-60 lg:h-80  overflow-hidden group">
            <Image
              src={img}
              alt="Kitchen"
              fill
              className="object-cover object-center transform transition duration-1000 hover:scale-110"
            />
          </div>
        ))}
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-20">
        <motion.h2
          className="text-4xl font-heading text-center pb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {pageData.content.title}
        </motion.h2>
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-md pb-4 text-gray-500">{pageData.content.dec1}</p>
          <p className="text-md text-gray-500">{pageData.content.dec2}</p>
        </motion.div>
      </section>

      {/* Design Section */}
      <section className="w-full h-screen flex flex-col md:flex-row">
        {/* Left - Image */}
        <div className="md:w-1/2 w-full h-1/2 md:h-screen relative">
          <Image
            src={pageData.designImg}
            alt="Modern interior design"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right - Content */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center justify-center text-center px-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              It&apos;s All About The Details. <br />
              When It Comes To Design.
            </h2>

            <p className="text-gray-500 mt-5 max-w-md text-lg">
              Every project needs a properly structured plan that guides the
              renovation process; a road map with details.
            </p>

            <button className="mt-8 bg-foreground text-background px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background rounded-none">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesTemplate;
