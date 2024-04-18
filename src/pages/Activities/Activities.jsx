import React from "react";
import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HeroPart from "../../components/HeroPart/HeroPart";
import AbtImg from "../../assets/Images/carousel.jpg";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import ActivityData from "../../assets/Data/ActivityData.jsx";
import "./Activities.css";
export default function Activities() {
  return (
    <div>
      <HeroPart text="Activities" backgroundImage={AbtImg} />
      <h1>Our Activities</h1>
      <p>
        Whenever the weather allows it, even in winters enjoy our yoga session.
        The fresh air will provide addiotnal relaxation
      </p>
      <ActivityCard object={ActivityData} />
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}
