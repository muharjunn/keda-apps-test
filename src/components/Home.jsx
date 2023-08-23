import React from "react";
import mac from "../assets/aw.png";

const Home = () => {
  return (
    <div className="mt-[87px] pt-[100px] pb-[70px] md:px-[100px] px-[20px] bg-gradient-to-b from-white to-blue-200">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-7xl text-grey-900 mb-4">Amazing Software</h1>
          <h2 className="text-sm md:w-[500px] w-[380px]">
            The only platform you will ever need to help run your business:
            integrated apps, kept simple, and loved by millions of happy users.
          </h2>
          <div className="flex flex-row my-7">
            <button className="border rounded-md px-3 py-1 text-white bg-blue-300 hover:bg-blue-700 mr-5">
              Start Now. Its Free
            </button>
            <button className="border rounded-md px-3 py-1 text-white bg-blue-600 hover:bg-blue-700">
              Meet an expert
            </button>
          </div>
        </div>
        <img src={mac} alt="" className="w-[800px] hidden md:block" />
      </div>
    </div>
  );
};

export default Home;
