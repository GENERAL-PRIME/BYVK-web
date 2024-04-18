import React from "react";
import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HeroPart from "../../components/HeroPart/HeroPart";
import AbtImg from "../../assets/Images/abtimg.jpeg";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import ActivityData from "../../assets/Data/ActivityData.jsx";

export default function Activities() {
  return (
    <div>
      <HeroPart text="Activities" backgroundImage={AbtImg} />
      <h1>Activities</h1>
      <ActivityCard object={ActivityData} />
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}
