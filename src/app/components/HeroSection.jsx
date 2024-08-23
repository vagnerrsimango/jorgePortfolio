"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jorge Matavele dos Santos Júnior",
                1500,
                "a Data Analyst",
                1500,
                "a Data Scientist",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Data-driven expert turning information into strategic insights,
            helping organizations make smarter decisions and boost
            profitability. Passionate about precise analytics and innovative
            solutions, I’m dedicated to optimizing processes and uncovering
            growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="tel:+258874824101"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Call now! 
            </Link>
            <Link
              href="/CVJM.pdf"
              className="relative inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white group"
            >
              <span className="absolute inset-0 w-full h-full bg-[#1E1E2F] rounded-full transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">E-mail</span> 
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="rounded-full shadow-2xl transform transition-all duration-500 hover:scale-110"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
