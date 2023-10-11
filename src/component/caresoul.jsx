import React, { useState } from "react";

const Caresoul = ({ currentIndex, allImage }) => {
  const [currentIdx, setCurrentIdx] = useState(currentIndex);

  const prevImage = () => {
    setCurrentIdx(
      (prevIdx) => (prevIdx - 1 + allImage.length) % allImage.length
    );
  };

  const nextImage = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % allImage.length);
  };
  return(
    <div className="carousel">
      <img src={allImage[currentIdx]} alt={`Image ${currentIdx + 1}`} width={400} height={400}/>
      <div className="controls">
        <button onClick={prevImage}>&lt; Prev</button>
        <button onClick={nextImage}>Next &gt;</button>
      </div>
    </div>
  )
};

export default Caresoul;
