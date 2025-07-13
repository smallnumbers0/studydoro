import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Buttons from "./components/Buttons/Buttons";
import Totals from "./components/Totals/Totals";

function App() {
  const [time, setTime] = useState({
    mins: 50,
    secs: 0,
  });
  const [isWorkTime, setisWorkTime] = useState(true);
  const [isBreakTime, setIsBreakTime] = useState(false);
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

  function addBreakTimeToStorage(breakMinutes) {
    const currentTotal = localStorage.getItem("totalBreakTime");
    const totalMinutes = currentTotal ? Number(currentTotal) : 0;
    localStorage.setItem(
      "totalBreakTime",
      (totalMinutes + breakMinutes).toString()
    );
  }

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      const toggleTimer = () => {
        setTime((runningTime) => {
          if (runningTime.secs > 0) {
            return { mins: runningTime.mins, secs: runningTime.secs - 1 };
          } else if (runningTime.mins > 0) {
            return { mins: runningTime.mins - 1, secs: 59 };
          } else {
            setIsRunning(false);

            if(isWorkTime) {
              setIsBreakTime(true);
              setisWorkTime(false);
              setTime({ mins: 15, secs: 0 });
              addStudyTimeToStorage(50); 
            } else {
              setisWorkTime(true);
              setIsBreakTime(false);
              setTime({ mins: 50, secs: 0 });
              addBreakTimeToStorage(15);
            }
            return runningTime;
          }
        });
      };
      toggleTimer();
      interval = setInterval(toggleTimer, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isWorkTime]);
  return (
    <>
      <div>
        <h1>Doom Scroll Doro</h1>
      </div>
      <Timer time={time} isWorkTime={isWorkTime} />
      <Buttons
        onToggle={handleToggle}
        isRunning={isRunning}
        onReset={() => {
          if (window.confirm("Resetting the timer will go back to work time. Are you sure?")) {
            setIsRunning(false);
            setTime({ mins: 50, secs: 0 });
            setisWorkTime(true);
            setIsBreakTime(false);
          }
        }}
      />
      <Totals />
    </>
  );
}
export default App;
