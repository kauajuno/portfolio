import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <div id="page-title">KAUÃ JÚNIO, DESENVOLVEDOR WEB</div>
        <div id="about-me">
          <div className="about-me--item">
            <h2>Sobre mim</h2>
            <p>
              Kauã Júnio, 21 anos, 8º período em engenharia de software na UFG.
              Gosto de gatos e aprendo russo no tempo livre.
            </p>
          </div>
          <div className="about-me--item">
            <h2>Skills</h2>
            <p>Sou designer UI/UX e desenvolvedor front-end em React.</p>
          </div>
          <div className="about-me--item">
            <h2>Objetivos</h2>
            <p>
              Busco minha primeira experiência profissional para expandir meus
              horizontes.
            </p>
          </div>
        </div>
      </nav>
      <div id="border"></div>
    </>
  );
};

export default NavBar;
