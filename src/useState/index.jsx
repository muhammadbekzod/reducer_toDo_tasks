import React, { useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    if (count < 10) {
      setCount(count + 1);
    } else if (count === 100) {
      alert("buyog'iga yo'l yo'q");
    } else {
      setCount(count + 10);
    }
  }
  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("buyog'iga yo'l yo'q");
    }
  }
  //   handleIncrease(2);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleIncrease}>increament</button>
      <button onClick={handleDecrease}>decreament</button>
    </div>
  );
};

export default UseEffectComponent;
