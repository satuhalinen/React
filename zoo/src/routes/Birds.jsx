import Card from "../components/Card";
function Birds({ searchHandler, birds, search, removeHandler, likesHandler }) {
  return (
    <>
      <h1>Birds</h1>
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {birds
          .filter((bird) =>
            bird.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              onRemove={() => removeHandler(animal.name)}
              addLikes={() => likesHandler(animal.name, "add")}
              removeLikes={() => likesHandler(animal.name, "away")}
            />
          ))}
      </div>
    </>
  );
}

export default Birds;
