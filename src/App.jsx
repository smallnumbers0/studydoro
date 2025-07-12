import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";

function App() {
  const [time, setTime] = useState({
    mins: 50,
    secs: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.secs > 0) {
            return { ...prevTime, secs: prevTime.secs - 1 };
          } else if (prevTime.mins > 0) {
            return { mins: prevTime.mins - 1, secs: 59 };
          } else {
            setIsRunning(false);
            return prevTime;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <>
      <div>
        <h1>Doom Scroll Doro</h1>
      </div>
      <Timer time={time} />
      <Buttons
        onStart={() => setIsRunning(true)}
        onPause={() => setIsRunning(false)}
        onReset={() => {
          setIsRunning(false);
          setTime({ mins: 50, secs: 0 });
        }}
      />
    </>
  );
}
export default App;
