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
      {showDescription === true ? (
        <p className="description">{description}</p>
      ) : null}
      {showDescription === true ? (
        <button onClick={visibilityHandler}>hide description</button>
      ) : (
        <button onClick={visibilityHandler}>show description</button>
      )}
    </div>
  );
};

export default Book;
