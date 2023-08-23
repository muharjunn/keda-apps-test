import { useState } from "react";
import { AiOutlineMenu, AiFillMediumCircle } from "react-icons/ai";
import Login from "./Login";

const Navbar = () => {
  const Links = [
    { name: "ABOUT", link: "/" },
    { name: "PRICING", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800"
        >
          <span className="text-3xl text-blue-600 mr-1 ">
            <AiFillMediumCircle size={55} />
          </span>
          <h1>HOME</h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <AiOutlineMenu name={open ? "close" : "menu"} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 md:z-auto absolute md:static bg-white  z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-10 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className="text-xl md:ml-8 px-6 py-2 rounded-2xl outline hover:outline-2 text-blue-400"
            onClick={() => setShowPopup(true)}
          >
            LOGIN
          </button>
          <Login isVisible={showPopup} onClose={() => setShowPopup(false)} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
