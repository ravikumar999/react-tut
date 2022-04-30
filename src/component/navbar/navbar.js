import { Fragment } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="main-navbar">
        <div className="logo-section">
          <img src="https://toppng.com/uploads/preview/design-for-logo-11549988276bxsuzsd1y1.png" alt=""/>
        </div>
        <div className="profile-section">
          <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt=""/>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;