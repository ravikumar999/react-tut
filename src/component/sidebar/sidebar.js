import { Link } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <ul className="menu-section">
        <Link to="/">
          <li className="menu-item">Home</li>
        </Link>
        <Link to="/youtube">
          <li className="menu-item">Youtube</li>
        </Link>
        <Link to="/about">
          <li className="menu-item">Explore</li>
        </Link>
        <Link to="/portfolio">
          <li className="menu-item">Shorts</li>
        </Link>
        <Link to="/training">
          <li className="menu-item">Subscriptions</li>
        </Link>
        <Link to="/courses">
          <li className="menu-item">Library</li>
        </Link>
        <Link to="/contact-us">
          <li className="menu-item">History</li>
        </Link>

      </ul>
    </div>
  )
}

export default Sidebar;