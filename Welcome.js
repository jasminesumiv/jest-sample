import React, { useState } from "react";

const Welcome = () => {
  const [text, setText] = useState("This is second text");
  function textChange() {
    setText("Changed");
  }

  return (
    <div>
      <h1>This is sample text</h1>
      <h1>{text}</h1>
      <button onClick={textChange}>Change</button>
    </div>
  );
};

export default Welcome;
