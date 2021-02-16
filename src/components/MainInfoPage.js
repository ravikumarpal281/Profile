import React from "react";
import Typed from "react-typed";

const MainInfoPage = () => {
  return (
    <div className="MainPageInfo">
      <div className="mainInfo">
        <h1>Web Development, Backend Development , Architecture Design</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "API Development",
            "Cloud Native Development",
          ]}
          backSpeed={60}
          typeSpeed={40}
          loop
        ></Typed>
        <a href="#" className="btn-maininfo">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default MainInfoPage;
