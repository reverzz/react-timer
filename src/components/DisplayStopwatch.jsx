import React from "react";

function DisplayStopwatch({time}) {

  const seconds = Math.trunc(time / 10)
  const mSeconds = time % 10;

  return (
    <p className="display"> {seconds}.{mSeconds}s </p>
  )
}

export default DisplayStopwatch;