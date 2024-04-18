import React from "react";
import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Carousel from "../../components/Carousel/Carousel";
import { CarouselPicture } from "../../assets/Data/CarouselPic";

function Home() {
  return (
    <div>
      <Carousel images={CarouselPicture} />
      <h1>Home</h1>
      <p>This is the home page</p>
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}

export default Home;
