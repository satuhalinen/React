import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SinglePage(props) {
  let urlParams = useParams();
  const navigate = useNavigate();
  const array = props[urlParams.category];
  const data = array.find((el) => el.name == urlParams.name);
  return (
    <>
      <img src="/?${data.name}" alt="picture" />
      <h2>{data.name}</h2>
      <p>{data.likes}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default SinglePage;
