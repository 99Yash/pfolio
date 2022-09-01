import React from "react";

const Navbar = () => {
  return (
    <nav className="text-md text-yellow-100/70 flex items-center justify-between">
      <h2 className="ml-4 font-bold tracking-tighter text-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-green-300  text-transparent bg-clip-text ">
        Yash.
      </h2>
      <ul className="flex space-x-12 mr-12 my-8">
        <li className="cursor-pointer hover:text-yellow-200/90 ">
          {" "}
          <a href="#about">
            <code className="text-green-400">01.</code> About
          </a>
        </li>
        <li className="cursor-pointer hover:text-yellow-200/90">
          {" "}
          <a href="#jobs">
            <code className="text-green-400">02.</code> Experience
          </a>
        </li>
        <li className="cursor-pointer hover:text-yellow-200/90 ">
          {" "}
          <a href="#work">
            <code className="text-green-400">03.</code> Work
          </a>
        </li>
        <li className="cursor-pointer hover:text-yellow-200/90">
          {" "}
          <a href="#contact">
            <code className="text-green-400">04.</code> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
