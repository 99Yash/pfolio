import React from "react";

const Projects = () => {
  return (
    <section id="work" className="relative h-screen pt-20 ml-80">
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
      <div className="flex ">
        <div className="border border-green-300 h-[10rem] overflow-x-clip mt-12"></div>
        <div className="flex mt-12 ml-64 ">
          //?Featured Project
          <div className="flex flex-col">
            <code className="text-green-400 font-bold text-lg ml-8 text-right ">
              Featured Project
            </code>
            <a
              href="#"
              className="text-slate-300/80 font-bold font-Inter leading-12 text-right hover:text-green-300 cursor-pointer text-2xl"
            >
              {" "}
              Halcyon Theme
            </a>
            //?Item Desc
            <div className="bg-slate-900/50 rounded self-end font-medium text-md font-Inter text-gray-400 text-right w-2/3 p-6 z-10 ">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </div>
            //?Tech used
            <div className="text-lg font-semibold font-mono text-right p-2 mt-2 text-gray-400 ">
              VS Code Sublime Text Atom iTerm2 Hyper
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
