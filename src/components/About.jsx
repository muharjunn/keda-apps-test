import React from "react";
import phone from "../assets/phone.png";
import people from "../assets/people.png";

const About = () => {
  return (
    <div className="md:px-[100px] px-[20px] pt-[20px] mb-[20px] bg-gradient-to-b from-blue-200 to-white">
      <div className="flex flex-col md:items-center py-5">
        <h2 className="text-sm ">About us</h2>
        <h1 className="text-6xl text-grey-900">Who Are We</h1>
        <p className="text-sm text-grey-600 md:text-center text-left md:w-[1200px] my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:mb-[70px]">
        <img
          src={phone}
          alt=""
          className="border rounded-lg w-[600px] h-[350px] mr-[80px]"
        />
        <div className="flex flex-col md:mt-[70px] mb-[50px] p-[30px]">
          <p className="text-2xl w-[350px] text-grey-800">
            Revolutionize Your Business with Cutting-Edge Solutions
          </p>
          <p className="text-sm md:w-[320px] lg:w-[500px]">
            Experience phenomenal growth and acquire delighted customers. Our
            team is laser-focused on crafting innovative solutions tailored to
            your needs.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-center">
        <div className="flex flex-col md:mt-[40px] mb-[40px] p-[30px]">
          <p className="text-2xl w-[250px] text-grey-800">
            Affordable Prices, Exceptional Results
          </p>
          <p className="text-sm md:w-[320px] lg:w-[500px]">
            Work with us for top-quality services that won’t break the bank.
            Unlock your company’s potential and enjoy lasting success.
          </p>
        </div>
        <img
          src={people}
          alt=""
          className="border rounded-lg w-[600px] h-[350px] md:ml-[80px]"
        />
      </div>
    </div>
  );
};

export default About;
