const Card = ({ name, number, title, age, click }) => {
  return (
    <div
      style={age < 30 ? { background: "red" } : { background: "green" }}
      className="card"
    >
      <h1>Name: {name}</h1>
      <p>Title: {title} </p>
      <p className={age < 30 ? "green" : "red"}>Age: {age}</p>
      <p>Age: {age}</p>
      <button onClick={click}>Remove me!</button>

      <p>ID: {number}</p>
    </div>
  );
};

export default Card;
