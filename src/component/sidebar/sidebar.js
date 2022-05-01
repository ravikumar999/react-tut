import { Link } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <ul className="menu-section">
        <Link to="/">
          <li className="menu-item">Home</li>
        </Link>
        <Link to="/about">
          <li className="menu-item">About Us</li>
        </Link>
        <Link to="/portfolio">
          <li className="menu-item">Portfolio</li>
        </Link>
        <Link to="/training">
          <li className="menu-item">Training</li>
        </Link>
        <Link to="/courses">
          <li className="menu-item">Courses</li>
        </Link>
        <Link to="/contact-us">
          <li className="menu-item">Contact Us</li>
        </Link>

      </ul>
    </div>
  )
}

export default Sidebar;