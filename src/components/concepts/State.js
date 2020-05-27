import React, { useState } from "react";

import FunctionalComponentDemo from "./FunctionalComponentDemo";

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is Unique to Functional Components</dt>
          <dd>
            Class components have a serperate means of using and changing state
          </dd>
          <dt>useState uses array desctrucuring</dt>
          <dd>useState proves a state variable and a setState function</dd>
          <dt>useState is a hook</dt>
          <dd>useState is a hook baked into react</dd>
          <dt>Triggers re-renders</dt>
          <dd>
            Like with props changes, changing the state of a component
            re-renders the whole component
          </dd>
        </ul>
        <StateExample />
      </div>
    </div>
  );
};

function StateExample() {
  const [text, setText] = useState("initial value");
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("blue");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
        onClick={(e) => setLikeNum(likeNum + 1)}
      />
      <span>{likeNum}</span>
      <br />
      <br />
      <p
        style={{ color: textColor }}
        onMouseEnter={(e) => setTextColor("red")}
        onMouseLeave={(e) => setTextColor("blue")}
      >
        This text should be able to change colors
      </p>
    </div>
  );
}

export default State;
