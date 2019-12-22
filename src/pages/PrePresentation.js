import React from "react";
import RadarDiagram from "../components/RadarDiagram"
import data from "../../assets/data/RadarDiagram-data.json"

const PrePresentation = () => {
  return (
    <div className="container">
      <h1>Предзащиты</h1>
      <h2 style={{textAlign: "center", margin: 0}}>Итоги по всем трекам</h2>
      <RadarDiagram data={data} />
    </div>
  );
};

export default PrePresentation;
