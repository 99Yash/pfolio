import React from "react";

const Navbar = () => {
  return (
    <nav className="text-lg text-yellow-100/70 flex relative container items-center justify-between">
      <h2 className="lg:ml-4 sm:p-6 font-bold tracking-tighter text-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 text-transparent bg-clip-text ">
        Yash.
      </h2>
      <ul className="lg:flex hidden space-x-12 mr-12 my-8">
        <li className="cursor-pointer font-mono hover:text-green-400  ">
          <a href="#about">
            <code className="text-green-400">01.</code> About
          </a>
        </li>
        <li className="cursor-pointer font-mono hover:text-green-400">
          {" "}
          <a href="#jobs">
            <code className="text-green-400">02.</code> Experience
          </a>
        </li>
        <li className="cursor-pointer font-mono hover:text-green-400 ">
          {" "}
          <a href="#work">
            <code className="text-green-400">03.</code> Projects
          </a>
        </li>
        <li className="cursor-pointer font-mono hover:text-green-400">
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
