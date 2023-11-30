function GameOver({ name, score, level, closeHandler }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>Game over</h2>
        <div>
          {name}, you collected {score} berries on level {level}.
        </div>
        <button className="close" onClick={closeHandler}>
          <span className="material-symbols-outlined"> Close </span>
        </button>
      </div>
    </div>
  );
}

export default GameOver;
