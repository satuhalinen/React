import { useRef } from "react";
const LoginPrompt = ({ handleLogIn }) => {
  const inputRef = useRef("");
  return (
    <div>
      <p>Please log in to see your profile.</p>
      <div>
        <label htmlFor="name">Your first name</label>
        <input type="text" id="name" ref={inputRef} />
      </div>
      <button onClick={() => handleLogIn(inputRef.current.value)}>
        Log in
      </button>
    </div>
  );
};

export default LoginPrompt;
