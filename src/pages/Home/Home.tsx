import "./home.css";
import Card from "../../components/Card/Card";

import ReactLogo from "../../assets/React.svg";
import ColonImage from "../../assets/colon.svg";
import TargetImage from "../../assets/splitTarget.svg";

const Home = () => {
  const theme = "#FC38B9";
  const antitheme = "#2E924A";

  return (
    <>
      <section id="main-section">
        <Card
          backgroundColor="thematic"
          img={ColonImage}
          border={antitheme}
          title="Sobre mim"
          description="Kauã Júnio, 21 anos, 8º período em engenharia de software na UFG. Gosto de gatos e aprendo russo no tempo livre."
          themeColor={theme}
        />
        <Card
          backgroundColor="neutral"
          img={ReactLogo}
          border={antitheme}
          title="Skills"
          description="Sou designer UI/UX e desenvolvedor front-end em React."
          themeColor={theme}
        />
        <Card
          backgroundColor="thematic"
          img={TargetImage}
          border={antitheme}
          title="Objetivos"
          description="Busco minha primeira experiência profissional para expandir meus horizontes."
          themeColor={theme}
        />
      </section>
    </>
  );
};

export default Home;
