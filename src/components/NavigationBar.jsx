import { Link } from "react-router-dom";
import "./Navbar.css";

function NavigationBar() {
  return (
    <nav>
      <div className="logo">
        <img src="./logo.svg" alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-user/">Add User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
