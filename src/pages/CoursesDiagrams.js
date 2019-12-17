import React from "react";
import CirclePackingDiagram from "../components/CirclePackingDiagram"
import HorizontalBarChart from "../components/HorizontalBarChart"
import cpdData from "../../assets/data/CirclePackingDiagram-data.json"
import hbcData from "../../assets/data/HorizontalBarChart-data.json"

const CoursesDiagrams = () => {
  return (
    <div className="container">
      <h1>Направления и проекты</h1>
      <CirclePackingDiagram data={cpdData} />
      <h1>Распределение людей по направлениям</h1>
      <HorizontalBarChart data={hbcData} />
    </div>
  );
};

export default CoursesDiagrams;
