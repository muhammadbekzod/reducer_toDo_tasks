import React, { useRef, useState } from "react";
import video from "./assets/video_of_flower_blooming.mp4";
const Flower = () => {
  const ref = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  function handleClick() {
    const nextPlay = !isPlay;
    if (nextPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>{isPlay ? "Pause" : "Play"}</button>
      </div>
      <video
        ref={ref}
        width="250"
        onPlay={() => setIsPlay(true)}
        onPause={() => setIsPlay(false)}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Flower;
