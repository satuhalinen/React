function GameOver({ name, score, level, closeHandler, text }) {
  if (score < 500) {
    text = ` The amount of berries you froze is not enough even for one winter month.`;
  } else if (score >= 500 && score < 1000) {
    text = ` The amount is enough for almost the whole winter.`;
  } else {
    text = ` Great, you have enough berries for the whole winter.`;
  }
  return (
    <div className="overlay">
      <div className="modal">
        <h2>Game over</h2>
        <div>
          {name}, you froze {score} berries on level {level}.{text}
        </div>
        <button className="close" onClick={closeHandler}>
          <span className="material-symbols-outlined"> Close </span>
        </button>
      </div>
    </div>
  );
}

export default GameOver;
