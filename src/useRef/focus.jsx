import React, { useRef } from "react";

const UseRefFocus = () => {
  const innerRef = useRef(null);

  function handleClick() {
    innerRef.current.focus();
  }
  return (
    <div>
      <input type="text" ref={innerRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseRefFocus;
