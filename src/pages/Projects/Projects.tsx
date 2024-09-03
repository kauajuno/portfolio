import Project from "../../components/Project/Project";
import Target from "../../assets/target.svg";
import Notify from "../../assets/notify.svg";
import MarleyMariaModista from "../../assets/marleymaria.svg";
import "./projects.css";

const Projects = () => {
  return (
    <div id="project-section">
      <h2 id="project-section--title">Projetos</h2>
      <Project
        projectImg={Target}
        projectTitle="Portfólio"
        projectDescription="Esse portfólio foi criado por mim, desde o design até a codificação."
        figmaLink="https://www.figma.com/design/IvsK5uSOJ5QDZfvpUKPKkI/Portfolio?node-id=0-1&m=dev&t=s8Y1vIVuSCS2wg8H-1"
        githubLink="https://github.com/kauajuno/portfolio"
      />
      <Project
        projectImg={Notify}
        projectTitle="Notify (em breve)"
        projectDescription="Notify é um aplicativo para tomar notas de maneira simples e confiável."
        figmaLink="#"
        githubLink="#"
      />
      <Project
        projectImg={MarleyMariaModista}
        projectTitle="Marley Maria Modista (em breve)"
        projectDescription="Marley Maria Modista é um site feita para uma costureira que também é minha mãe."
        figmaLink="#"
        githubLink="#"
      />
    </div>
  );
};

export default Projects;
