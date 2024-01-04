import { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./styles.css";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {};

  return (
    <main>
      <h1>Data Passing with User Input</h1>
      <ChildComponent handleClick={handleClick} />
      <p>{message}</p>
    </main>
  );
};

export default App;
