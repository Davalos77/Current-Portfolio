import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 px-12 items-center flex justify-between ">
        <span>
          <Image
            src="/images/logo.png"
            alt="hero image"
            width={50}
            height={50}
            className="ml-40"
          />
        </span>
        <p className="text-slate-600">
          All rights reserved/Created by. Dennis Avalos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
