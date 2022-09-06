import React from "react";

const Projects = () => {
  return (
    <section id="work" className="relative h-screen lg:pt-20">
      //?project no.
      <code className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text text-2xl">
        03.
      </code>
      <span className="text-slate-300/80 font-overpass font-semibold text-3xl">
        {" "}
        Some Things I’ve Built
      </span>
      <span className="text-slate-600/80 ">
        &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;....................................................................................
      </span>
      <div className="flex justify-center bg-slate-900/50 lg:bg-none mt-24 ">
        <div className="border hidden lg:block border-green-300 h-64 w-2/3 lg:mt-12"></div>
        <div className=" lg:mt-12 mt-4 ">
          //?Featured Project
          <div className="">
            <code className="block text-green-400 font-bold text-lg lg:ml-8 ml-6 lg:text-right ">
              Featured Project
            </code>
            <a
              href="#"
              className="text-slate-300/80 block font-bold ml-6 font-Inter leading-12 lg:text-right hover:text-green-300 cursor-pointer text-2xl"
            >
              {" "}
              Halcyon Theme
            </a>
            //?Item Desc
            <div className="lg:bg-slate-900/50 rounded text-lg lg:self-end font-medium font-Inter text-gray-400 lg:text-right w-full p-6 z-10 ">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </div>
            //?Tech used
            <div className="text-lg font-semibold font-mono lg:text-right pl-6 lg:p-2 mt-2 text-gray-400 ">
              <ul className="flex flex-wrap lg:justify-end [&>*]:p-2 ">
                <li>VS Code</li>
                <li>Sublime Text</li>
                <li>Atom</li>
                <li>iTerm2</li>
                <li>Hyper</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
