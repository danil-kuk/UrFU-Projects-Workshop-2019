import React from "react";
import CuratorsGraph from "../components/CuratorsGraph.js";
import data from "../../assets/data/CuratorsGraph-data.json"

const Curators = () => {
  return (
    <div className="container">
      <h1>Кураторы</h1>
      <CuratorsGraph data={data} />
    </div>
  );
};

export default Curators;