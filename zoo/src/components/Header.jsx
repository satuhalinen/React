import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>Zoo app</h1>
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
    </header>
  );
};

export default Header;
