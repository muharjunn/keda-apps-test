import React from "react";
import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";

const Login = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] md:w-[500px] flex flex-col">
        <div className="bg-white p-2 rounded">
          <div className="md:px-3 p-3">
            <div className="flex flex-row justify-between items-start">
              <h1 className="text-black mb-4 text-xl font-medium ">
                Sign in to our platform
              </h1>
              <AiFillCloseCircle
                size={20}
                className="cursor-pointer"
                onClick={() => onClose()}
              />
            </div>
            <form action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-grey-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@gmail.com"
                  required
                  className="bg-grey-50 border border-grey-300 text-grey-900 
                  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-grey-900"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                  className="bg-grey-50 border border-grey-300 text-grey-900 
                  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="remember"
                    value=""
                    className="w-4 h-4 bg-grey-50 rounder border border-grey-300 focus:ring-3 focus:ring-blue-300 "
                    required
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-grey-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Lost Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 rounded-lg text-sm px-5 py-2 text-center my-5"
              >
                Login to your account
              </button>
              <div>
                <p className="text-sm">
                  Not registered?{" "}
                  <a href="aw" className="text-blue-600">
                    Create account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  isVisible: PropTypes.func,
  onClose: PropTypes.func,
};

Login.defaultProps = {
  isVisible: () => {},
  onClose: () => {},
};

export default Login;
