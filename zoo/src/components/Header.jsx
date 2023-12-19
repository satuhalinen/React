import { NavLink } from "react-router-dom";
const Header = () => {
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
              <NavLink to="/animals">Animals</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/birds">Birds</NavLink>
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
