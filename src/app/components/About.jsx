"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2  text-[#ADB7BE]">
        <li>CS50x: Introduction to Computer Science - Harvard University</li>
        <li>Responsive Web Design - freeCodeCamp</li>
        <li>Front End Development Libraries - freeCodeCamp</li>
        <li>Back End Development and APIs - In Progress</li>
        <li>JavaScript Algorithms and Data Structures - In Progress</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2  text-[#ADB7BE]">
        <li>Powerlifting</li>
        <li>Watching F1</li>
        <li>Building Legos</li>
        <li>Reading Sci-Fi novels</li>
        <li>Traveling</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("certifications");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
            every project I undertake. I am excited to showcase my work and
            accomplishments in this portfolio and look forward to the
            opportunity to join your team. Thank you for visiting!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certfications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              Hobbies
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
