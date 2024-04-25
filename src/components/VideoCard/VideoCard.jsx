import React from "react";
import "./VideoCard.css"; // Import CSS for styling

function VideoCard(props) {
  return (
    <div className="container">
      <h2>Our Work Videos</h2>
      <div className="container-video">
        {Object.values(props.object).map((card) => (
          <div key={card.id} className="video-card">
            <iframe
              className="video"
              src={card.videoSource}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCard;
