import "./Timer.css";

function Timer({ time, isWorkTime }) {
  return (
    <div className="timer-container">
      <h1 className="timer-label">
        {isWorkTime ? "Work Time" : "Scroll Time"}
      </h1>
      <h2 className="timer">
        {String(time.mins).padStart(2, "0")}:{String(time.secs).padStart(2, "0")}
      </h2>
    </div>
  );
}

export default Timer;
