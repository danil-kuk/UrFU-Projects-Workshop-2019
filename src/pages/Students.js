import React from "react";
import data from '../../assets/data/Students-data.json'
import PieChart from '../components/PieChart'
import "../styles/Students.css"

const Students = () => {
  return (
    <div className="container">
      <h1>Студенты</h1>
      <div className="students-diagrams-holder">
        <div>
          <PieChart data={data.gender} colorScheme={{ scheme: 'pastel1' }} />
          <h2>Рапределение по полу</h2>
        </div>
        <div>
        <PieChart data={data.course} colorScheme={{ scheme: 'nivo' }}
          startAngle={-90}
          endAngle={90}
          height={350}
        />
        <h2>Рапределение по курсу</h2>
        </div>
      </div>
    </div>
  );
};

export default Students;
