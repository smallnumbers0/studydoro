import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";

function App() {
  const [time, setTime] = useState({
    mins: 0,
    secs: 5,
  });
  const [isRunning, setIsRunning] = useState(false);

  function handleToggle() {
    setIsRunning(!isRunning);
  }

  function addStudyTimeToStorage(studiedMinutes) {
    const currentTotal = localStorage.getItem("totalStudyTime");
    const totalMinutes = currentTotal ? Number(currentTotal) : 0;
    localStorage.setItem(
      "totalStudyTime",
      (totalMinutes + studiedMinutes).toString()
    );
  }

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
            addStudyTimeToStorage(1); //im adding just 1 minute when timer ends, but getting 2 in local storage
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
        onToggle={handleToggle}
        isRunning={isRunning}
        onReset={() => {
          setIsRunning(false);
          setTime({ mins: 0, secs: 5 });
        }}
      />
    </>
  );
}
export default App;
