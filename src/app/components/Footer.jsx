import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container items-center flex justify-between ">
        <span>
          <Image
            src="/images/logo.png"
            alt="hero image"
            width={50}
            height={50}
          />
        </span>
        <p className="text-slate-600">Created by: Dennis Avalos</p>
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
