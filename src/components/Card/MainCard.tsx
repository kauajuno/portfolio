import React from "react";
import "./main-card.css";

interface CardProps {
  backgroundColor: string;
  img: string;
  title: string;
  description: string;
  border: string;
  themeColor: string;
}

const Card: React.FC<CardProps> = ({
  backgroundColor,
  img,
  title,
  description,
  border,
  themeColor,
}) => {
  const displayStyle =
    backgroundColor === "neutral"
      ? {
          backgroundColor: `#ffffff`,
          border: `2px solid ${themeColor}`,
        }
      : {
          backgroundColor: themeColor,
        };

  return (
    <>
      <div className="card">
        <div className="card-display" style={displayStyle}>
          <img className="card-display--image" src={img} alt="" />
        </div>
        <div className="card-details">
          <h2 className="card-details--title">{title}</h2>
          <p className="card-details--description">{description}</p>
        </div>
      </div>
      <div className="card--border" style={{ backgroundColor: border }}></div>
    </>
  );
};

export default Card;
