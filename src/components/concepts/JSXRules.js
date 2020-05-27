import React, { createElement } from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. Its actually closer to JavaScript</dd>
          <dt>React Elements</dt>
          <dd>
            These are used to construc and update the DOM, or what you see on
            teh screen
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
        </dl>
        <hr />
        <NormalComponenet />
        <CreateElementComponenet />
      </div>
    </div>
  );
};

const NormalComponenet = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Normal Functional Component</h1>
      <p>This was constructed with JSX in the return</p>
      <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" />
    </div>
  );
};

const CreateElementComponenet = () => {
  return React.createElement(
    "div",
    { style: { border: "2px solid black" } },
    React.createElement("h1", null, "CreateElement Compenent "),
    React.createElement(
      "p",
      null,
      "This was constructed with CreateElement calls in the return."
    ),
    React.createElement(
      "img",
      {
        src:
          "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png",
      },
      null
    )
  );
};

export default JSXRules;
