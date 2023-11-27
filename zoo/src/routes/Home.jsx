import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="homePictures">
        <div className="animalPicture">
          <NavLink to="/animals">Animals</NavLink>
        </div>
        <div className="birdPicture">
          <NavLink to="/birds">Birds</NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
