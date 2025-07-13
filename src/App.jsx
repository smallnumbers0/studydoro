import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
//time is set to 5 secs for debugging,
function App() {
  const [time, setTime] = useState({
    mins: 0,
    secs: 5,
  });
  const [isStudyTime, setIsStudyTime] = useState(false);
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

            if(isStudyTime) {
              setIsBreakTime(true);
              setIsStudyTime(false);
              setTime({ mins: 0, secs: 5 });
              addStudyTimeToStorage(1); 
            } else {
              setIsStudyTime(true);
              setIsBreakTime(false);
              setTime({ mins: 0, secs: 3 });
              addBreakTimeToStorage(1);
            }
            return prevTime;
          }
        });
      };
      toggleTimer();
      interval = setInterval(toggleTimer, 1000);
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
