import React from "react";
import "../styles/Boards.css"
import CuratorCard from "./CuratorCard"
import Shuffle from "./ArrayShuffle"

const CuratorsBoard = (props) => {
    return (
        <div className="curators-cards-board">
            {props.data.map(p => (
                <CuratorCard
                    name={p.name}
                    org={p.org}
                    activity={p.activity}
                    degree={p.degree}
                    img_link={p.img_link}
                    projects_count={p.projects_count}
                    courses={p.courses}
                    key={p.name}
                />
            ))}
        </div>
    );
};

export default CuratorsBoard;