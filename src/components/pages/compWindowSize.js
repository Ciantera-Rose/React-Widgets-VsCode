import React, { useState, useEffect } from "react";

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  //console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    ("useEffect here");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <div>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </div>
  );
};

export default useEffectCleanup;
