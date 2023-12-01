import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);

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

    setGameLaunch(!gameLaunch);
    setGameOn(!gameOn);
  };

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
  };

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(0);
  };

  const clickHandler = () => {
    setScore(score + 100);
  };

  console.log(player);

  return (
    <>
      <div className="startContent">
        <h1>Freeze the berries!</h1>
        {gameLaunch && <NewGame onclick={gameSetHandler} />}
        {gameOn && (
          <Game
            score={score}
            circles={circles}
            stopHandler={stopHandler}
            clickHandler={clickHandler}
          />
        )}
        {gameOver && (
          <GameOver closeHandler={closeHandler} {...player} score={score} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
