import "./Music.css";

function Music() {
  const youtubeId = "jfKfPfyJRdk";

  return (
    <div className="music-background">
      <iframe
        width="180"
        height="150"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allow="autoplay"
        style={{ opacity: 100 }}
      ></iframe>
    </div>
  );
}

export default Music;
