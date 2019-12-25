import React from "react";
import img from '../../assets/data/Итоговая визуализация.svg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="container">
      <div className="image-holder">
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Home;
