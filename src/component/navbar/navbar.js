import { Fragment } from "react";
import logo from "../../assets/images/logo.svg";
// import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
// import AppsIcon from '@mui/icons-material/Apps';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="main-navbar">
        <div className="logo-section">
          <img src={logo} />
        </div>

        <div className="search-section">
          <input type="text" className="search-input" />
          <button className="search-btn">
            Search
            {/* <SearchIcon /> */}
          </button>
        </div>
        <div className="login-section">
         <button className="sign-btn">SIGN IN</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;
// npm install @mui/material @emotion/react @emotion/styled