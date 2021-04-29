import React from "react";
import Button from "./Button";

function ResetStopwatch({setTime, setIsRunning}) {

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <>
      <Button
        className="timer__button"
        onClick={resetTimer}
      >
        Reset
      </Button>
    </>
  )
}

export default ResetStopwatch;