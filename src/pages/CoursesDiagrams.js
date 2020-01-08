import React from "react";
import CirclePackingDiagram from "../components/CirclePackingDiagram"
import HorizontalBarChart from "../components/HorizontalBarChart"
import cpdData from "../../assets/data/CirclePackingDiagram-data.json"
import hbcData from "../../assets/data/HorizontalBarChart-data.json"

const CoursesDiagrams = () => {
  return (
    <div className="container">
      <h1>Диаграммы</h1>
      <h2>Распределение проектов по направлениям</h2>
      <CirclePackingDiagram data={cpdData} />
      <h2>Распределение людей по направлениям</h2>
      <HorizontalBarChart data={hbcData} />
    </div>
  );
};

export default CoursesDiagrams;
