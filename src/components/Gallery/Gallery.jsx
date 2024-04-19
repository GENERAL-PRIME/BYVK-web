import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <p>This is the gallery page</p>
      <div className="collage">
        <div className="row">
          <div className="column">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
