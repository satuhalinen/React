const Book = ({
  title,
  author,
  description,
  showDescription,
  visibilityHandler,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{author}</p>
      {/* TODO: show description only when showDescription is true */}
      {showDescription === true ? (
        <p className="description">{description}</p>
      ) : null}
      <button onClick={visibilityHandler}>show description</button>
      {/* TODO: Include a button to toggle the visibility of the description. 
        The button text should change based on the description's visibility state.*/}
    </div>
  );
};

export default Book;
