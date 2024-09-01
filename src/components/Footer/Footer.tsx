import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a className="footer--link" href="">
        Contato
        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
      </a>
      <a className="footer--link" href="">
        Projetos
        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
      </a>
    </footer>
  );
};

export default Footer;
