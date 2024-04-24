import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="#about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="Image"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, HTML, CSS and Git. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to create amazing applications
          </p>
          {/* <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold">Education</span>
            <span>Hobbies</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
