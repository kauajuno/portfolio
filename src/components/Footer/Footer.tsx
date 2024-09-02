import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <Link
        className={`footer--link ${location.pathname === "/" ? "active" : ""}`}
        to="/"
      >
        Home
        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
      </Link>
      <Link
        className={`footer--link ${
          location.pathname === "/contact" ? "active" : ""
        }`}
        to="/contact"
      >
        Contato
        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
      </Link>
      <Link
        className={`footer--link ${
          location.pathname === "/projects" ? "active" : ""
        }`}
        to="/projects"
      >
        Projetos
        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
      </Link>
    </footer>
  );
};

export default Footer;
