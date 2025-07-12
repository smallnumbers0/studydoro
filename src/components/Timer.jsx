import "./Timer.css";

function Timer({ time }) {
  return (
    <div className="timer-container">
      <h2 className="timer">
        {time.mins}:{time.secs}
      </h2>
    </div>
  );
}

export default Timer;
