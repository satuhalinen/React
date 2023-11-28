import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";

function App() {
  const [player, setPlayer] = useState();

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const levelAmount = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    console.log("circlesArray", circlesArray);

    console.log("levelIndex", levelIndex, "amount of circles", levelAmount);

    setPlayer({
      level: level,
      name: name,
    });
  };
  console.log(player);

  return (
    <>
      <h1>Freeze the berries!</h1>
      <NewGame onclick={gameSetHandler} />
    </>
  );
}

export default App;
