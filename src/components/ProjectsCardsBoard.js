import React from "react";
import "../styles/Boards.css"
import ProjectCard from "./ProjectCard"

const Board = (props) => {
    return (
        <div className="projects-cards-board">
            {props.data.map(p => (
                <ProjectCard
                    title={p.title}
                    description={p.description}
                    link={p.link}
                    key={p.title}
                />
            ))}
        </div>  
    );
};

export default Board;