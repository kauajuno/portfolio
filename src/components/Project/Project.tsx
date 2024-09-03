import React from "react";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./project.css";

interface ProjectProps {
  projectImg: string;
  projectTitle: string;
  projectDescription: string;
  figmaLink: string;
  githubLink: string;
}

const Project: React.FC<ProjectProps> = ({
  projectImg,
  projectTitle,
  projectDescription,
  figmaLink,
  githubLink,
}) => {
  return (
    <div className="project">
      <div className="project-display">
        <img src={projectImg} alt="project" className="project-display--img" />
      </div>
      <div className="project-info">
        <h3 className="project-info--title">{projectTitle}</h3>
        <p className="project-info--description">{projectDescription}</p>
        <div className="project-info--links">
          <a
            href={githubLink}
            className="project-info--link"
            onClick={
              githubLink === "#"
                ? (e) => {
                    alert("O link não está pronto ainda!");
                    e.preventDefault();
                  }
                : () => {}
            }
          >
            <FontAwesomeIcon icon={faGithub} />
            <div>GitHub</div>
          </a>
          <a
            href={figmaLink}
            className="project-info--link"
            onClick={
              figmaLink === "#"
                ? (e) => {
                    alert("O link não está pronto ainda!");
                    e.preventDefault();
                  }
                : () => {}
            }
          >
            <FontAwesomeIcon icon={faFigma} />
            <div>Figma</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
