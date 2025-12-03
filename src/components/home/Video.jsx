import "../../css/components/home/Video.css";

const Video = ({ src, title }) => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
