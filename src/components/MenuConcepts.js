import { Link, NavLink } from "react-router-dom";

const MenuConcepts = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>HTML Links (not recommended): </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <span>Link Component (React Router): </span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/papas-fritas">Error404</Link>
        </li>
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
        <li>
          <span>useParam Hook: </span>
          <Link to="/user/Hawaiian-Fox">Hawaiian-Fox</Link>
          <Link to="/user/Rendy">Rendy</Link>
        </li>
        <li>
          <span>Query Parameters: </span>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <span>Redirections: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Nested Routes: </span>
          <Link to="/react">React</Link>
        </li>
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
