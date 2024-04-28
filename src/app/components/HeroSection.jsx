"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// import { GoogleFonts } from "next-google-fonts";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-2  text-4xl sm:text-7xl lg:text-9xl lg:leading-normal font-extrabold">
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  ">
              Hello, I&apos;m
              <br></br>
              Dennis
            </span>
            <br></br>
          </h1>
          <h2 className="text-white mb-4  text-2xl sm:text-2xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Full-Stack Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Scroll through my portfolio website where seamless code
            craftsmanship meets visionary design to showcase why I excel in
            delivering innovative software solutions that surpass expectations
            and redefine possibilities.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-200 text-white  mt-3">
              <a href="/Resume.pdf">Download CV</a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4  place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
