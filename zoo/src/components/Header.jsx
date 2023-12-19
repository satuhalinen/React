import { NavLink } from "react-router-dom";
const Header = (cleanHandler) => {
  return (
    <header className="header">
      <div className="leftside">
        <NavLink to="/">Zoo</NavLink>
      </div>
      <div className="rightside">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/animals" onClick={cleanHandler}>
                Animals
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/birds" onClick={cleanHandler}>
                Birds
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
