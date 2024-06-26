import React from "react";
import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HeroPart from "../../components/HeroPart/HeroPart";
import AbtImg from "../../assets/Images/carousel.jpg";
import ClassData from "../../assets/Data/ClassesData";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import ResponsiveTitle from "../../components/ResponsiveTitle/ResponsiveTitle";

function Classes() {
  return (
    <div>
      <ResponsiveTitle websiteName="BYVK" pageTitle="Classes" />
      <HeroPart text="Classes" backgroundImage={AbtImg} />
      <h1>Our Classes</h1>
      <p>This is the classes page</p>
      <ActivityCard object={ClassData} />
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}

export default Classes;
