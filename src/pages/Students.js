import React from "react";
import data from '../../assets/data/Students-data.json'
import PieChart from '../components/PieChart'

const Customers = () => {
  return (
    <div className="container">
      <h1>Студенты</h1>
      <h2>Половой состав</h2>
      <PieChart data={data.gender} colorScheme={{ scheme: 'pastel1' }} />
    </div>
  );
};

export default Customers;
