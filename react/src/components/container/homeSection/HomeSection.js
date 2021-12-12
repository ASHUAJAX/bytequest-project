import React from "react";
import "./homeSection.css";

function HomeSection(props) {
  return (
    <div className="HomeSection-container">
      <h2 className="HomeSection-heading1">{props.heading1}</h2>
      <h1 className="HomeSection-heading2">{props.heading2}</h1>
      <div className="row">
        <div className="col-xl-4 col-lg-4    HomeSection-sec-1">
          <div className="HomeSection-sec-1-div"></div>
        </div>
        <div className="col-xl-4 col-lg-4   HomeSection-sec-2">
          <div className="HomeSection-sec-2-div"></div>
        </div>
        <div className="col-xl-4 col-lg-4   HomeSection-sec-3">
          <div className="HomeSection-sec-3-div"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
