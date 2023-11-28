import Card from "../components/Card";
function Animals({
  searchHandler,
  animals,
  search,
  removeHandler,
  likesHandler,
}) {
  return (
    <>
      <h1>Animals</h1>
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {animals
          .filter((animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase())
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

export default Animals;