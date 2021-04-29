import React, {useState} from "react";
import ControleStopwatch from "./components/ControleStopwatch";
import DisplayStopwatch from "./components/DisplayStopwatch";

function Stopwatch () {

  const [time, setTime] = useState(0);

  return (
    <div className="stopwatch">
      <DisplayStopwatch
        time={time}
      />
      <ControleStopwatch
        setTime={setTime}
        time = {time}
      />
    </div>
  )
}

export default Stopwatch;