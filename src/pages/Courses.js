import React from "react";
import CirclePackingDiagram from "../components/CirclePackingDiagram"
import data from "../../assets/data.json"

const Courses = () => {
  return (
    <div className="container">
      <h1>Направления</h1>
      <CirclePackingDiagram data={data}/>
    </div>
  );
};

export default Courses;
