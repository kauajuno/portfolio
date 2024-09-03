import "./App.css";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import BackwardArrow from "./assets/backwardArrow.png";

function App() {
  const location = useLocation();

  return (
    <div id="page-wrapper">
      <NavBar />
      {location.pathname !== "/" && (
        <Link to="/" className="go-back">
          <img src={BackwardArrow} alt="Go Back" id="backward-arrow" />
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
