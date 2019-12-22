import React from "react";
import RadarDiagram from "../components/RadarDiagram"
import data from "../../assets/data/RadarDiagram-data.json"
import "../styles/PrePresentation.css"

const PrePresentation = () => {
  return (
    <div className="prepres-container">
      <h1>Предзащиты</h1>
      <h2>Итоги по всем трекам</h2>
      <RadarDiagram data={data.summury} dataKeys={['Итоги по трекам']} labelsFontSize={18}/>
      <div className="prepres-diagrams-holder">
        <div className="item">
          <h3>Applications</h3>
          <RadarDiagram data={data.Applications} dataKeys={['Applications']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>GameDev</h3>
          <RadarDiagram data={data.GameDev} dataKeys={['GameDev']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Machine Learning</h3>
          <RadarDiagram data={data.MachineLearning} dataKeys={['MachineLearning']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Mobile</h3>
          <RadarDiagram data={data.Mobile} dataKeys={['Mobile']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Web, SMM</h3>
          <RadarDiagram data={data.Web_SMM} dataKeys={['Web_SMM']} labelsFontSize={12}/>
        </div>
      </div>
    </div>
  );
};

export default PrePresentation;
