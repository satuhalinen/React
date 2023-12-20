import { useRef, useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";
import useSound from "use-sound";

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
  const rounds = useRef(0);
  const currentInst = useRef(0);
  const [playSound] = useSound("iceClickPlay.mp3");
  const [endSound] = useSound("iceClickEnd.mp3");

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
    gameStart();
  };

  const randomNumber = () => {
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRndInt(0, levelsAmount);
    } while (nextActive === currentInst.current);

    setCurrent(nextActive);
    currentInst.current = nextActive;
    rounds.current++;
    pace *= 0.95;
    timeoutIdRef.current = setTimeout(randomNumber, pace);
  };

  function gameStart() {
    setGameOn(!gameOn);
    randomNumber();
  }

  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
    setScore((prevScore) => prevScore + 100);
    playSound();
    rounds.current--;
  };

  const stopHandler = () => {
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
    setGameOn(false);
    endSound();
    setGameOver(!gameOver);
    rounds.current = null;
    pace = 1000;
  };

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(0);
  };

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
