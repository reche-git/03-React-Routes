import { Link, NavLink } from "react-router-dom";

const MenuConcepts = () => {
  return (
    <nav>
      <h3>Navs:</h3>
      <ol>
        {/* 1 */}
        <li>
          <span>HTML Links (not recommended): </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>

        {/* 2 */}
        <li>
          <span>Link Element (React Router): </span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/papas-fritas">Error404</Link>
        </li>

        {/* 3 */}
        <li>
          <span>Nav-Link component: </span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink exact to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>

        {/* 4 */}
        <li>
          <span>useParam Hook: </span>
          <Link to="/user/TooDeveloperForMyShirt995">
            TooDeveloperForMyShirt995
          </Link>
          <Link to="/user/I-Am-The-Documentation">I-Am-The-Documentation</Link>
        </li>

        {/* 5 */}
        <li>
          <span>Query Parameters: </span>
          <Link to="/products">Products</Link>
        </li>

        {/* 6 */}
        <li>
          <span>Redirections: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>

        {/* 7 */}
        <li>
          <span>Nested Routes: </span>
          <Link to="/react">React</Link>
        </li>

        {/* 8 */}
        <li>
          <span>Private Routes: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConcepts;
