import React from "react";
import ChordDiagram from "../components/ChordDiagram"
import matrix from "../../assets/data/ChordDiagram-matrix.json"

const Customers = () => {
  return (
    <div className="container">
      <h1>Заказчики и направления</h1>
      <ChordDiagram matrix={matrix}/>
    </div>
  );
};

export default Customers;
