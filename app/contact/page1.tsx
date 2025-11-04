"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
      <div className="h-[500px] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact.avif"
            alt="Contact"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-heading pb-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Reach Out to Us
            </motion.h1>
            <motion.p
              className="text-base md:text-lg max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Need support, have a query, or looking for collaboration? Let’s
              talk!
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Form */}

      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Contact Info */}
        <div className="flex flex-col text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-heading pb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Contact Information
          </motion.h2>

          <motion.div className="space-y-3 text-lg md:text-xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}>
            <div>
              <MdEmail className="text-primary text-xl inline" />
              <span>contact@valuehomes.com</span>
            </div>
            <div>
              <FaPhoneAlt className="text-yellow-500 text-lg inline" />
              <span>+1 3689965856</span>
            </div>
            <p>Canada - Toronto</p>
          </motion.div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-lg border border-gray-300 rounded-2xl p-6 sm:p-8 w-full">
          <form className="space-y-5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block font-medium mb-1 text-teal-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block font-medium mb-1 text-teal-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block font-medium mb-1 text-teal-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full rounded-md bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2.5 transition duration-200 shadow-sm hover:shadow-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
