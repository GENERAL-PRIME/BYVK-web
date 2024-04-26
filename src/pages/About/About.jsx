import LeaveUsAText from "../../components/LeaveUsAText/LeaveUsAText";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AbtImg from "../../assets/Images/carousel.jpg";
import HeroPart from "../../components/HeroPart/HeroPart";
import AboutUs from "../../components/AboutUs/AboutUs";
import VideoCard from "../../components/VideoCard/VideoCard";
import AboutVideoLinks from "../../assets/Data/VdoLinkAbout";
import aboutusimg from "../../assets/Images/long.jpg";
import ResponsiveTitle from "../../components/ResponsiveTitle/ResponsiveTitle";

function About() {
  return (
    <div>
      <ResponsiveTitle websiteName="BYVK" pageTitle="About" />
      <HeroPart backgroundImage={AbtImg} text="About" />
      <AboutUs
        image={aboutusimg}
        title="About Us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          odio, illo facere, porro sint rem provident eum nihil nisi
          reprehenderit illum pariatur, mollitia doloremque eaque placeat ad
          quis voluptatum temporibus! Velit vero, libero sapiente perspiciatis,
          quia illo animi voluptate nam tenetur voluptatibus totam molestias
          nobis odio enim sunt dolor ratione, dolores aliquid! Modi repellat ex,
          placeat rerum itaque veniam ut? Blanditiis consectetur architecto vel"
      />
      <VideoCard object={AboutVideoLinks} />
      <GetInTouch />
      <LeaveUsAText />
    </div>
  );
}

export default About;
