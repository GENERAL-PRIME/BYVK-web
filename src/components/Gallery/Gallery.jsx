import React from "react";
import "./Gallery.css";
import image1 from "../../assets/Images/fff.png";
import image2 from "../../assets/Images/fff1.png";
import image3 from "../../assets/Images/fff2.png";
import image4 from "../../assets/Images/fff3.png";
import image5 from "../../assets/Images/fff4.png";

function Gallery() {
  return (
    <div className="container">
      <h1>Gallery</h1>
      <p>This is the gallery page</p>
      <div className="collage">
        <div className="collage-row">
          <div className="collage-column">
            <img src={image1} alt="placeholder" />
            <img src={image2} alt="placeholder" />
            <img src={image3} alt="placeholder" />
          </div>
        </div>
        <div className="collage-row">
          <div className="collage-column">
            <img src={image5} alt="placeholder" />
            <img src={image4} alt="placeholder" />
            <img src={image5} alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
