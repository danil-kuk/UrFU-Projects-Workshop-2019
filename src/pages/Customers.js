import React from "react";
import CustomersBoard from "../components/CustomersBoard"
import ChordDiagram from "../components/ChordDiagram"
import data from "../../assets/data/CustomersInfo-data.json"
import matrix from "../../assets/data/ChordDiagram-matrix.json"

const CustomersInfo = () => {
  return (
    <div className="container">
      <h1>Заказчики</h1>
      <ChordDiagram matrix={matrix}/>
      <h2>Информация</h2>
      <CustomersBoard data={data}/>
    </div>
  );
};

export default CustomersInfo;
