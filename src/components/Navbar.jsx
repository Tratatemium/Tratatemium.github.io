import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">[home]</Link></li>
        <li><Link to="/about">[about]</Link></li>
        <li><Link to="/projects">[projects]</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
