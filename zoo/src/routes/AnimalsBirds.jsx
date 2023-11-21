import Card from "../components/Card";
function AnimalsBirds({
  searchHandler,
  organisms,
  search,
  removeHandler,
  likesHandler,
}) {
  return (
    <>
      <h1>Animals and birds</h1>
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {organisms
          .filter((organism) =>
            organism.name.toLowerCase().includes(search.toLowerCase())
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

export default AnimalsBirds;
