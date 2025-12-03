import { useState } from "react";
import "../../css/components/home/VideoSlideshow.css";
import Video from "./Video";

const VideoSlideshow = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    { title: "Edge of Eternities - Launch Trailer", src: "https://www.youtube.com/embed/zFayjWhFOI0" },
    { title: "Edge of Eternities - Deck Building Tips", src: "https://www.youtube.com/embed/sDYRVVBdT88" },
    { title: "Edge of Eternities - Deck Highlights", src: "https://www.youtube.com/embed/M9MXMEhVRVM" },
  ];

  const nextVideo = () => {
    setVideoIndex(videoIndex < videos.length - 1 ? videoIndex + 1 : 0);
  };

  const prevVideo = () => {
    setVideoIndex(videoIndex > 0 ? videoIndex - 1 : videos.length - 1);
  };

  return (
    <section id="video-slideshow">
      <h2>{videos[videoIndex].title}</h2>

      <Video src={videos[videoIndex].src} title={videos[videoIndex].title} />

      <div className="video-arrows">
        <button className="arrow left" onClick={prevVideo}>&lt;</button>
        <button className="arrow right" onClick={nextVideo}>&gt;</button>
      </div>
    </section>
  );
};

export default VideoSlideshow;
