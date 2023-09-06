import React, { useState } from "react";

const InputLike = () => {
  const [like, setLike] = useState(true);

  function handleLike(e) {
    setLike(e.target.checked);
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          name=""
          id=""
          checked={like}
          onChange={handleLike}
        />

        <p>{like ? "Like" : "Dislike"}</p>
      </div>
    </div>
  );
};

export default InputLike;
