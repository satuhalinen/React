import { useState } from "react";

const ChildComponent = ({ handleClick }) => {
  const [userInput, setUserInput] = useState();

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={handleChange}
      />
      <button onClick={() => handleClick(userInput)}>
        Send Message to Parent
      </button>
    </div>
  );
};

export default ChildComponent;
