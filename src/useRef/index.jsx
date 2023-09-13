import React, { useRef, useState } from "react";

const UseRefComponent = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const ref = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(ref.current);

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(ref.current);
  }

  let Secundamer = 0;

  if (startTime != null && now != null) {
    Secundamer = (now - startTime) / 1000;
  }
  return (
    <div>
      <p>Time: {Secundamer.toFixed(2)}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button>restart</button>
      <button>clicked</button>
    </div>
  );
};

export default UseRefComponent;
