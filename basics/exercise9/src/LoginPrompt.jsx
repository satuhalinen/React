const LoginPrompt = ({ handleLogIn }) => {
  // TODO: Use useRef hook to create a reference to the input element

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
