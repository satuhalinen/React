import Card from "../components/Card";
function Persons({ searchHandler, persons, search, removeHandler }) {
  return (
    <>
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {persons
          .filter((fox) =>
            fox.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((person) => (
            <Card
              key={person.id}
              {...person}
              click={() => removeHandler(person.id)}
            />
          ))}
      </div>
    </>
  );

  <h1>Persons will be here</h1>;
}

export default Persons;
