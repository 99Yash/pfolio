import React from "react";

const WorkExp = () => {
  return (
    <section id="jobs" className="ml-[30rem] pt-[12rem] mb-[12rem] ">
      <code className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text text-2xl">
        {" "}
        02.
      </code>
      <span className="text-slate-300/80 font-overpass font-semibold text-3xl ">
        Where I’ve Worked
      </span>
      <span className="text-slate-600/80 ">
        &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;....................................................................................
      </span>
      <div className="flex ">
        <div className=" mt-12 text-[1.05rem] cursor-pointer font-mono flex flex-col ">
          <button className="hover:bg-sky-900/20 border-l-2 border-l-slate-700 focus:border-l-green-400 focus:text-green-300 focus:bg-sky-900/10 hover:text-green-300 p-4 w-40 text-start text-slate-400 ">
            Upstatement
          </button>
          <button className="hover:bg-sky-900/20 border-l-2 border-l-slate-700 focus:border-l-green-400 focus:text-green-300 focus:bg-sky-900/10 hover:text-green-300 p-4 w-40 text-slate-400 text-start ">
            Scout
          </button>
          <button className="hover:bg-sky-900/20 border-l-2 border-l-slate-700 focus:border-l-green-400 focus:text-green-300 focus:bg-sky-900/10 hover:text-green-300 p-4 w-40 text-slate-400 text-start ">
            Apple
          </button>
          <button className="hover:bg-sky-900/20 border-l-2 border-l-slate-700 focus:border-l-green-400 focus:text-green-300 focus:bg-sky-900/10 hover:text-green-300 p-4 w-40 text-slate-400 text-start ">
            Starry
          </button>
          <button className="hover:bg-sky-900/20 border-l-2 border-l-slate-700 focus:border-l-green-400 focus:text-green-300 focus:bg-sky-900/10 hover:text-green-300 p-4 w-40 text-slate-400 text-start ">
            MullenLove
          </button>
        </div>
        <div className="mt-12 font-Inter flex text-gray-100 flex-col">
          <h1 className="font-semibold text-gray-100/70 ">
            position @{" "}
            <a href="#" className="text-green-400 ">
              company
            </a>{" "}
          </h1>
          <code className="text-gray-100/70">date start - date end</code>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit.</li>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
