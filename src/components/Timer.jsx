import "./Timer.css";

function Timer({ time }) {
  return (
    <div className="timer-container">
      <h2 className="timer">
        {String(time.mins).padStart(2, "0")}:{String(time.secs).padStart(2, "0")}
      </h2>
    </div>
  );
}

export default Timer;
