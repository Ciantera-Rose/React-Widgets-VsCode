import React, { useState } from "react";

const CompChangeTitle = () => {
  const [text, setText] = useState("Title");

  const handleClick = () => {
    if (text === "Title") {
      setText("New Title");
    } else {
      setText("Title");
    }
  };

  return (
    <div>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default CompChangeTitle;
