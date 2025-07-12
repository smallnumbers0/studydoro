import "./Buttons.css";

function Buttons({ onStart, onPause, onReset }) {
  return (
    <div className="button-container">
      <button type="button" className="button" onClick={onStart}>
        Start
      </button>
      <button type="button" className="button" onClick={onPause}>
        Pause
      </button>
      <button type="button" className="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Buttons;
