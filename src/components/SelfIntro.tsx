import React from "react";

const SelfIntro = () => {
  return (
    <section className=" min-h-screen lg:mt-28 lg:px-8 lg:w-3/4 items-center justify-start ">
      <div className="text-lg font-dmMono  text-green-400 ">Hi, my name is</div>
      <div className="lg:text-7xl text-6xl my-6 font-Inter text-slate-400  text-transparent bg-clip-text font-semibold">
        Yash Gourav Kar.
      </div>
      <div className="lg:text-7xl text-5xl pb-4 font-Inter bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold ">
        I build things for the web.
      </div>
      <h5 className="lg:w-3/5 w-full leading-7 font-Inter text-yellow-100/70 font-medium text-lg mt-8 mb-4 ">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <a
          href="#"
          className="text-green-400 hover:text-green-300 font-Inter font-medium "
        >
          Upstatement
        </a>{" "}
        .
      </h5>
      <button className="bg-inherit text-green-500 border px-8 py-4 mt-6 border-spacing-1 rounded border-green-600 hover:text-green-300 hover:bg-slate-900 text-lg font-bold font-mono ">
        Check out my profile &rarr;
      </button>
    </section>
  );
};

export default SelfIntro;
