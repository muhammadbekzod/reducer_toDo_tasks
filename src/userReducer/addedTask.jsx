import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  function handeChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input type="text" value={text} onChange={handeChange} />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
