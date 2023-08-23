import React from "react";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-black h-[90px] items-center py-[20px] ">
      <div className="text-white flex flex-row justify-center">
        <CiFacebook size={40} />
        <CiTwitter size={40} className="mx-[20px]" />
        <CiLinkedin size={40} />
      </div>
    </div>
  );
};

export default Footer;
