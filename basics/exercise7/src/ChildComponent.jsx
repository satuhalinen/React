import React, { useState } from "react";

const ChildComponent = () => {
  /*
    TODOS:
    - Use the useState hook to declare a state variable named userInput to store the input value.
    - Define the handleChange function to update the userInput state when the input changes.
    - Add an onChange event to handle changes in the input.
    - Bind the 'userInput' to the handleClick
  */
  return (
    <div>
      <input type="text" placeholder="Enter your message" />
      <button>Send Message to Parent</button>
    </div>
  );
};

export default ChildComponent;
