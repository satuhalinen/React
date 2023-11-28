import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Circle from "./UI_components/Circle";
import Game from "./components/Game";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const levelAmount = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    console.log("circlesArray", circlesArray);

    console.log("levelIndex", levelIndex, "amount of circles", levelAmount);

    console.log("circlesArray", circlesArray);

    setCircles(circlesArray);

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
      <Game score={score} circles={circles} />
    </>
  );
}

export default App;
