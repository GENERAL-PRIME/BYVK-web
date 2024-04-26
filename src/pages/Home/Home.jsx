import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Carousel from "../../components/Carousel/Carousel";
import { CarouselPicture } from "../../assets/Data/CarouselPic";
import Gallery from "../../components/Gallery/Gallery";
import VideoCard from "../../components/VideoCard/VideoCard";
import VideoLinks from "../../assets/Data/VideoLinks";
import AboutUs from "../../components/AboutUs/AboutUs";
import homeimg from "../../assets/Images/home.jpg";
import ResponsiveTitle from "../../components/ResponsiveTitle/ResponsiveTitle";

function Home() {
  return (
    <div>
      <ResponsiveTitle websiteName="BYVK" pageTitle="Home" />
      <Carousel images={CarouselPicture} />
      <h1>Home</h1>
      <p>This is the home page</p>
      <AboutUs
        image={homeimg}
        title="Who we are"
        text="We are a group of people who are passionate about web development. We are here to help you with your web development needs."
      />
      <Gallery />
      <VideoCard object={VideoLinks} />
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}

export default Home;
