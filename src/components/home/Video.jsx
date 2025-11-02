import "../../css/components/home/Video.css";

const Video = ({ title }) => {
  return (
    <div className="video-container">
      {/* Placeholder for the iFrame for now */}
      <div className="video-placeholder">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Video;