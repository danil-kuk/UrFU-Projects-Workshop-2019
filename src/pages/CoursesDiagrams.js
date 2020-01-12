import React from "react";
import CirclePackingDiagram from "../components/CirclePackingDiagram"
import HorizontalBarChart from "../components/HorizontalBarChart"
import WaffleChart from "../components/WaffleChart"
import cpdData from "../../assets/data/CirclePackingDiagram-data.json"
import hbcData from "../../assets/data/HorizontalBarChart-data.json"
import wcData from "../../assets/data/WaffleChart-data.json"
import "../styles/CoursesDiagrams.css"

const CoursesDiagrams = () => {
  return (
    <div className="container">
      <h1>Диаграммы</h1>
      <h2>Распределение проектов по направлениям</h2>
      <CirclePackingDiagram data={cpdData} />
      <div className="two-courses-diagrams">
        <div>
          <h2>Распределение людей по направлениям</h2>
          <HorizontalBarChart data={hbcData} />
        </div>
        <div>
          <h2>Количество записавшихся по времени</h2>
          <WaffleChart data={wcData} />
        </div>
      </div>
    </div>
  );
};

export default CoursesDiagrams;
