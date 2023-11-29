import { useState } from "react";

function NewGame({ onclick }) {
  const [name, setName] = useState("");

  const inputHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Start a game by choosing difficulty and entering your name.</h2>
      <input type="text" onChange={inputHandler}></input>
      <div className="circles">
        <button className="startClass" onClick={() => onclick("easy", name)}>
          Easy
        </button>
        <button className="startClass" onClick={() => onclick("medium", name)}>
          Medium
        </button>
        <button className="startClass" onClick={() => onclick("hard", name)}>
          Hard
        </button>
      </div>
    </div>
  );
}

export default NewGame;
