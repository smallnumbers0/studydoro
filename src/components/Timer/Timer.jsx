import "./Timer.css";
import { useRef } from "react";

function Timer({ time, isWorkTime }) {
  const containerRef = useRef(null);
  const effectRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    effectRef.current.style.setProperty("--x", `${x}%`);
    effectRef.current.style.setProperty("--y", `${y}%`);

    const rotateY = ((x - 50) / 50) * 15;
    const rotateX = ((y - 50) / 50) * -15;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    effectRef.current.style.setProperty("--x", `50%`);
    effectRef.current.style.setProperty("--y", `50%`);
    containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="timer-border"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="timer-container">
        <div className="mouse-effect" ref={effectRef}></div>
        <h2 className="timer-label">
          {isWorkTime ? "Work Time" : "Scroll Time"}
        </h2>
        <h2 className="timer">
          {String(time.mins).padStart(2, "0")}:
          {String(time.secs).padStart(2, "0")}
        </h2>
      </div>
    </div>
  );
}

export default Timer;
