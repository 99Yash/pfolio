import React, { FC } from "react";
import "./App.css";
import SelfIntro from "./components/SelfIntro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WorkExp from "./components/WorkExp";

const App: FC = () => {
  return (
    <div className=" bg-black ">
      <Navbar />
      <div className=" flex flex-col w-5/6 items-start justify-center p-16 ">
        <SelfIntro />
        <About />
        <WorkExp />
      </div>
    </div>
  );
};

export default App;
