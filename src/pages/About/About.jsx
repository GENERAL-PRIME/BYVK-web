import React from "react";
import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import HeroPart from "../../components/HeroPart/HeroPart";
import AbtImg from "../../assets/Images/abtimg.jpeg";

function About() {
  return (
    <div>
      <HeroPart backgroundImage={AbtImg} text="About" />
      <h1>About</h1>
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}

export default About;
