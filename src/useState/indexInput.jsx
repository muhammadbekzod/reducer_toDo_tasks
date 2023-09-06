import React, { useState } from "react";

const IndexInput = () => {
  const [text, setText] = useState("Abdurashid");

  function handleSearch(e) {
    setText(e.target.value);
  }
  function handleClear() {
    setText("student");
  }
  return (
    <div>
      <input type="text" placeholder="pls typing" onChange={handleSearch} />
      <p>Your typed: {text}</p>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default IndexInput;
