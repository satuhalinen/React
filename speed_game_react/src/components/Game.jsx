import Circle from "../UI_components/Circle";
function Game({ score, circles, stopHandler }) {
  return (
    <div>
      <p>{score}</p>
      <div>
        {circles.map((_, i) => (
          <Circle key={i} />
        ))}
      </div>
      <button onClick={stopHandler}>Stop game</button>
    </div>
  );
}

export default Game;
