import React from "react";
import CustomersBoard from "../components/CustomersBoard"
import data from "../../assets/data/CustomersInfo-data.json"

const CustomersInfo = () => {
  return (
    <div className="container">
      <h1>Заказчики</h1>
      <CustomersBoard data={data}/>
    </div>
  );
};

export default CustomersInfo;
