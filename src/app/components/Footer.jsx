import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 px-12 items-center flex justify-between ">
        <span>
          <Image
            src="/images/logo.png"
            alt="hero image"
            width={40}
            height={40}
          />
        </span>
        <p className="text-slate-600">Let&apos;s keep Coding!!!</p>
      </div>
    </footer>
  );
};

export default Footer;
