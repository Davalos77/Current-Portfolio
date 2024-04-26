import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="#about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          alt="Image"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className=" text-[#ADB7BE] text-base lg:text-lg">
            My name is Dennis Avalos, a passionate full-stack developer with a
            keen eye for detail and a love for creating innovative solutions. I
            have worked on a variety of personal projects ranging from web and
            mobile applications to database management and system integration. I
            am constantly seeking to expand my skills and stay up-to-date with
            the latest technologies. Beyond my technical expertise, I am
            committed to delivering projects on time and exceeding client
            expectations. I believe in the importance of clear communication,
            collaboration, and adaptability to ensure successful outcomes in
            every project I undertake. When I&apos;m not coding, you can find me
            exploring new technologies, browsing forums/articles to further hone
            my skills, as well as being in the gym 5 times a week. I am excited
            to showcase my work and accomplishments in this portfolio and look
            forward to the opportunity to collaborate on future projects. Thank
            you for visiting!
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
