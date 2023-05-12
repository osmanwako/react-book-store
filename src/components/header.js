import { Link } from "react-router-dom";

const Header = () => {
    return <nav class="nav-bar">
        <Link class="nav-brand" to="/">Bookstore CMS</Link>
        <ul class="nav-links">
            <li>
                <Link aria-current="page" class="nav-link active-link" to="/">BOOKS</Link>
            </li>
            <li><Link class="nav-link" to="./categories">CATEGORIES</Link>
            </li></ul>
        <button class="icon-button" type="button">
            <span class="material-icons primary-color">&#9993;</span>
        </button></nav>
}
export default Header;