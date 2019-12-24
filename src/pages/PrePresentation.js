import React from "react";
import RadarDiagram from "../components/RadarDiagram"
import data from "../../assets/data/RadarDiagram-data.json"
import "../styles/PrePresentation.css"

const PrePresentation = () => {
  return (
    <div className="prepres-container">
      <h1>Предзащиты</h1>
      <h2>Итоги по всем трекам</h2>
      <RadarDiagram data={data.summury} dataKeys={['Общее среднее']} labelsFontSize={18}/>
      <div className="prepres-diagrams-holder">
        <div className="item">
          <h3>Applications</h3>
          <RadarDiagram data={data.Applications} dataKeys={['Applications']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Игры</h3>
          <RadarDiagram data={data['Игры']} dataKeys={['Игры']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Машинное обучение</h3>
          <RadarDiagram data={data['Машинное обучение']} dataKeys={['Машинное обучение']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Мобльные приложения</h3>
          <RadarDiagram data={data['Мобльные приложения']} dataKeys={['Мобльные приложения']} labelsFontSize={12}/>
        </div>
        <div className="item">
          <h3>Web и SMM</h3>
          <RadarDiagram data={data['Web и SMM']} dataKeys={['Web и SMM']} labelsFontSize={12}/>
        </div>
      </div>
    </div>
  );
};

export default PrePresentation;
