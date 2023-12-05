import { useState } from "react";
import { useRef } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(0);

  const timeoutIdRef = useRef(null);

  let pace = 1000;
  let levelsAmount;

  const gameSetHandler = (level, name) => {
    const { amount } = levels.find((el) => el.name === level);
    levelsAmount = amount;
    const circlesArray = Array.from({ length: levelsAmount }, (x, i) => i);

    setCircles(circlesArray);

    setPlayer({
      level: level,
      name: name,
    });

    setGameLaunch((prevLaunch) => !prevLaunch);
    setGameOn(!gameOn);
    randomNumber();
  };

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  };

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(0);
  };

  const clickHandler = () => {
    setScore(score + 100);
  };

  const randomNumber = () => {
    let nextActive;

    do {
      nextActive = getRndInt(0, levelsAmount);
    } while (nextActive === current);
    setCurrent(nextActive);
    timeoutIdRef.current = setTimeout(randomNumber, pace);
    console.log(nextActive);
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
            current={current}
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
