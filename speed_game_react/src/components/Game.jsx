import Circle from "../UI_components/Circle";
function Game({ score, circles, stopHandler }) {
  return (
    <div className="startContent">
      <p>{score}</p>
      <div className="circles">
        {circles.map((_, i) => (
          <Circle key={i} id={i} />
        ))}
      </div>
      <button className="stopClass" onClick={stopHandler}>
        Stop game
      </button>
    </div>
  );
}

export default Game;
