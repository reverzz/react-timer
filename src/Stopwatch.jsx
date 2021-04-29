import React, {useState} from "react";
import "./index.css"
import ControleStopwatch from "./components/ControleStopwatch";

function Stopwatch () {

  const [time, setTime] = useState(0);

  return (
    <div className="stopwatch">
      <p className="display"> {time} </p>
      <ControleStopwatch
        setTime={setTime}
        time = {time}
      />
    </div>
  )
}

export default Stopwatch;