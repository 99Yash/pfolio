import React, { FC } from "react";
import "./App.css";
import SelfIntro from "./components/SelfIntro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";

const App: FC = () => {
  return (
    <div className=" bg-gradient-to-tr from-gray-900 via-black to-black ">
      <Navbar />
      <div className=" flex flex-col p-14 lg:w-5/6 items-center justify-center ">
        <SelfIntro />
        <About />
        <WorkExp />
        <Projects />
        <GetInTouch />
      </div>
    </div>
  );
};

export default App;
