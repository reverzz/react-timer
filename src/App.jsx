import React, {useState, useEffect, useMemo, useCallback} from "react";
import "./index.css"
import Button from "./components/Button";
import Stopwatch from "./Stopwatch";

function App() {

  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [time, setTime] = useState(0);

  const getSeconds = (e) => {
    if (
      e.target.value >= 0 &&
      e.target.value < 60
    ) {
      return setSeconds(e.target.value);
    }
  }

  const getMinutes = (e) => {
    if (e.target.value >= 0) {
      return setMinutes(e.target.value);
    }
  }

  const startTimer = useCallback(() => {
    if (!minutes && !seconds) {
      return;
    }
    let min = minutes === '' ? 0 : parseInt(minutes);
    let sec = seconds === '' ? 0 : parseInt(seconds);
    setTime(min * 60 + sec);
    setMinutes('');
    setSeconds('');
  }, [seconds, minutes]);

  useEffect(() => {
    let timer;
    timer = time > 0 && setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const outputMinutes = useMemo(() => {
    const min = Math.trunc(time / 60);
    return min < 10 ? '0' + min : min;
  }, [time]);

  const outputSeconds = useMemo(() => {
    const sec = time % 60;
    return sec < 10 ? '0' + sec : sec;
  }, [time]);

  const resetTimer = () => {
    setTime(0);
    setMinutes('');
    setSeconds('');
  }

  return (
    <div>
      <div className="timer">
        <p className="display"> {outputMinutes} : {outputSeconds} </p>
        <p> Enter the time: </p>
        <input
          className="timer__input"
          type="number"
          placeholder="mm"
          value={minutes}
          onChange={getMinutes}
        />
        <input
          className="timer__input"
          type="number"
          placeholder="ss"
          value={seconds}
          onChange={getSeconds}
        />
        <Button
          className="timer__button"
          onClick={startTimer}
          disabled={time > 0}
        >
          Start
        </Button>
        <Button
          className="timer__button"
          onClick={resetTimer}
        >
          Reset
        </Button>
      </div>
      <Stopwatch/>
    </div>
  )
}

export default App;
