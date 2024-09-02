import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import "./contact-card.css";
import React from "react";

interface CardProps {
  buttonIcon: FontAwesomeIconProps["icon"];
  buttonText: string;
  link: string;
}

const ContactCard: React.FC<CardProps> = ({ buttonIcon, buttonText, link }) => {
  return (
    <a className="contact-button" href={link}>
      <FontAwesomeIcon className="contact-icon" icon={buttonIcon} />
      <h2>{buttonText}</h2>
    </a>
  );
};

export default ContactCard;
