import "./Buttons.css";

function Buttons({ onToggle, isRunning, onReset }) {
  return (
    <div className="button-container">
      <button type="button" className="button" onClick={onToggle}>
        {!isRunning ? "Start" : "Pause"}
      </button>
      <button type="button" className="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Buttons;
