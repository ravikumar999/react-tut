import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/navbar/navbar';
import Sidebar from './component/sidebar/sidebar';
import './App.css';
import About from "./pages/about-us/about";
import Portfolio from "./pages/portfolio/portfolio";
import Traning from "./pages/training/training";
import Course from "./pages/courses/course";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import YoutubeHome from "./pages/youtube-home/yhome";
import Login from "./pages/login/login";
function App() {
  return (
    <div>
           <Navbar />
      <div className="main-content">
        <Router>
          <div className="app-sidebar">
            <Sidebar />
          </div>
          <div className="content">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/youtube" element={< YoutubeHome />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/training" element={<Traning />} />
              <Route path="/courses" element={<Course />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>

          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
