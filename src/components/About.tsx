import React from "react";
import WorkExp from "./WorkExp";

const About = () => {
  return (
    <section id="about" className="relative h-screen pt-20 ml-96 ">
      <code className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text text-2xl ">
        01.{" "}
      </code>
      <span className="font-semibold text-4xl font-overpass text-slate-300/80">
        About Me
      </span>
      <span className="text-slate-600/80 ">
        &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;....................................................................................
      </span>
      <p className="text-gray-400 font-Inter font-medium text-lg w-1/2 mt-4 pt-6 leading-7 ">
        Hello! My name is Yash and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS!
        <br />
        <br />
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          <a
            className="text-green-400 hover:text-green-300 font-mono font-semibold "
            href="#"
          >
            {" "}
            advertising agency
          </a>
          ,{" "}
          <a
            className="text-green-400 hover:text-green-300 font-mono font-semibold "
            href="#"
          >
            {" "}
            a start-up
          </a>
          ,{" "}
          <a
            className="text-green-400 hover:text-green-300 font-mono font-semibold "
            href="#"
          >
            a huge corporation
          </a>{" "}
          , and a{" "}
          <a
            className="text-green-400 hover:text-green-300 font-mono font-semibold "
            href="#"
          >
            student-led design studio
          </a>{" "}
          . My main focus these days is building accessible, inclusive products
          and digital experiences at{" "}
          <a
            href="#"
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text hover:text-green-500 font-Inter font-semibold"
          >
            Upstatement
          </a>{" "}
          for a variety of clients.
          <br />
          <br />I also recently{" "}
          <a
            href="#"
            className="text-green-400 hover:text-green-300 font-mono font-semibold "
          >
            launched a course
          </a>{" "}
          that covers everything you need to build a web app with the Spotify
          API using Node & React.
        </p>
        <br />
        <p>
          Here are a few technologies I’ve been working with recently:
          <br />
          <br />
          <div className="grid grid-cols-2">
            <li className="font-mono text-[1.05rem]">JavaScript (ES6+) </li>
            <li className="font-mono text-[1.05rem]">TypeScript</li>
            <li className="font-mono text-[1.05rem]">React</li>
            <li className="font-mono text-[1.05rem]">Eleventy</li>
            <li className="font-mono text-[1.05rem]">Node.js</li>
            <li className="font-mono text-[1.05rem]">WordPress</li>
          </div>
        </p>
      </p>
    </section>
  );
};

export default About;
