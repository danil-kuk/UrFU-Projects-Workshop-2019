import React from "react";
import "../styles/CustomersBoard.css"
import CuratorCard from "./CuratorCard"
import Shuffle from "./ArrayShuffle"

const CuratorsBoard = (props) => {
    return (
        <div className="customers-cards-board">
            {Shuffle(props.data).map(p => (
                <CuratorCard
                    name={p.name}
                    org={p.org}
                    activity={p.activity}
                    degree={p.degree}
                    img_link={p.img_link}
                    org_place={p.org_place}
                    projects_count={p.projects_count}
                    courses={p.courses}
                    key={p.name}
                />
            ))}
        </div>
    );
};

export default CuratorsBoard;