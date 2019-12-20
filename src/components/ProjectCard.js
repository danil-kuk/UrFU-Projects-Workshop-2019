import React from "react";
import "../styles/ProjectCard.css"

const Card = (props) => {
  return (
    <div className="project-card">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a href={props.link}>Ссылка на проект</a>
    </div>
  );
};

export default Card;