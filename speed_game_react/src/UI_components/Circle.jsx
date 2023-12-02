function Circle({ id, clickHandler }) {
  let squareName;
  let current = 1;

  if (id == 0) {
    squareName = "square0";
  }
  if (id == 1) {
    squareName = "square1";
  }
  if (id == 2) {
    squareName = "square2";
  }
  if (id == 3) {
    squareName = "square3";
  }
  if (id == 4) {
    squareName = "square4";
  }
  if (id == 5) {
    squareName = "square5";
  }
  if (id == 6) {
    squareName = "square6";
  }
  return (
    <div
      className="circle"
      id={id === current ? squareName : null}
      onClick={() => clickHandler()}
    >
      <p>{id}</p>
    </div>
  );
}
export default Circle;
