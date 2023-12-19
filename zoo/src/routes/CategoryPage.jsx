import Card from "../components/Card";
import { useParams } from "react-router-dom";
function CategoryPage(props) {
  let urlParams = useParams();
  let category = urlParams.category;

  return (
    <>
      <h1>{category}</h1>
      <input type="text" onChange={props.searchHandler} />
      <div className="cards">
        {props[category]
          .filter((el) =>
            el.name.toLowerCase().includes(props.search.toLowerCase())
          )
          .map((el) => (
            <Card
              key={el.name}
              {...el}
              onRemove={() => props.removeHandler(el.name)}
              addLikes={() => props.likesHandler(el.name, "add")}
              removeLikes={() => props.likesHandler(el.name, "away")}
            />
          ))}
      </div>
    </>
  );
}

export default CategoryPage;
