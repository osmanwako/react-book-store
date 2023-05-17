import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="nav-bar">
    <Link className="nav-brand" to="/">Bookstore CMS</Link>
    <ul className="nav-links">
      <li>
        <Link aria-current="page" className="nav-link active-link" to="/">BOOKS</Link>
      </li>
      <li>
        <Link className="nav-link" to="./categories">CATEGORIES</Link>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">&#9993;</span>
    </button>
  </nav>
);
export default Header;
