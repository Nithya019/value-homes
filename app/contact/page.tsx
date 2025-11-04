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
        <div className="relative z-10 text-center text-background">
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

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-lg">
            {/* Left Side: Form */}
            <div className="space-y-6 p-8">
              <h1 className="text-4xl font-bold text-gray-800 font-heading">
                Get In Touch
              </h1>
              <form>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex-1">
                    <label className="text-sm font-semibold text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mt-6">
                  <label className="text-sm font-semibold text-gray-700">
                    Message/Comments
                  </label>
                  <textarea
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="4"
                  ></textarea>
                </div>
                <div className="mt-6 text-center">
                  <button className="mt-6 bg-foreground text-background px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Contact Info */}
            <div className="space-y-6 text-center bg-foreground p-8 text-background">
              <h2 className="text-3xl font-semobold">Contact Information</h2>
              <div className="space-y-4 text-center">
                <div className="flex items-center space-x-2 flex-col">
                  <div>
                    <MdEmail className="text-primary text-xl inline" />
                    <span>contact@valuehomes.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt className="text-yellow-500 text-lg inline" />
                    <span>+1 3689965856</span>
                  </div>
                  <p>Canada - Toronto</p>
                </div>
                <div className="text-center mt-6">
                  <button className="mt-6 bg-background text-foreground px-6 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-primary hover:text-background">
                    Request a Quote Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
