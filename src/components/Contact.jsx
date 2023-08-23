import React from "react";
import { BiEnvelope, BiMap, BiMobile } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="bg-indigo-600 h-[800px] px-[100px]">
      <div className="flex flex-col ">
        <h1 className="text-white w-[450px] text-8xl font-thin">
          Lets build something
        </h1>
        <h1 className="text-white text-8xl font-semibold">great together</h1>
        <div className="flex flex-row mt-[70px] justify-center">
          <div className="text-white mr-[300px]">
            <h1 className="text-lg font-semibold">GET IN TOUCH</h1>
            <p className="w-[400px] my-[20px] font-thin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s
            </p>
            <div className="flex flex-row">
              <BiEnvelope size={25} />
              <h1 className="ml-[80px]">Amazing@bussines.com</h1>
            </div>
            <div className="flex flex-row my-[20px]">
              <BiMobile size={25} />
              <h1 className="ml-[80px]">0177577364</h1>
            </div>
            <div className="flex flex-row">
              <BiMap size={25} />
              <h1 className="ml-[80px]">Golden Tower 8A, Jakarta </h1>
            </div>
          </div>
          <div className="border rounded-md w-[600px] h-auto bg-white text-black p-5">
            <h1 className="text-2xl font-semibold mb-5">SAY SOMETHING</h1>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Your Name ..."
              required
              className="bg-grey-50 border border-grey-300 text-grey-900 
                  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email ..."
              required
              className="bg-grey-50 border border-grey-300 text-grey-900 
                  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2 my-[20px]"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Message ..."
              required
              className="bg-grey-50 border border-grey-300 text-grey-900 
                  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2 h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
