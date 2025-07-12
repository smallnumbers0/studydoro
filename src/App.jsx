import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div>
        <h1>Doom Scroll Doro</h1>
      </div>
      <Timer />
      <Buttons />
    </>
  );
}
export default App;
