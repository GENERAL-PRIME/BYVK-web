import React from "react";
import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Carousel from "../../components/Carousel/Carousel";
import { CarouselPicture } from "../../assets/Data/CarouselPic";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div>
      <Carousel images={CarouselPicture} />
      <h1>Home</h1>
      <p>This is the home page</p>
      <Gallery />
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}

export default Home;
