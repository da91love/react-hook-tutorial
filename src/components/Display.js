import React from "react";
import Context from "./Context";

// It returns an object with 2 values:
// { Provider, Consumer }

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <Context.Consumer>
      {value => <div>The answer is {value}.</div>}
    </Context.Consumer>
  );
}

export default Display;