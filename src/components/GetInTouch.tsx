import React from "react";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="text-gray-200 lg:pt-20 flex text-center lg:ml-32 flex-col justify-center "
    >
      <code className="text-green-300 font-semibold text-lg  ">
        04. What's Next?
      </code>
      <h3 className="text-gray-300/80 mt-6 font-Inter text-5xl font-bold  ">
        Get In Touch
      </h3>
      <p className="text-gray-300/80 mt-6 text-lg font-Inter  lg:text-center ">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className="border border-green-600 hover:bg-slate-900/40 py-4 px-8 rounded-sm w-fit self-center mt-12 text-lg font-semibold font-mono text-green-400 ">
        {" "}
        Say Hello
      </button>
    </section>
  );
};

export default GetInTouch;
