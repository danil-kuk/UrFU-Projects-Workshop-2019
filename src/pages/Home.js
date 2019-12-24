import React from "react";
import img from '../../assets/data/Итоговая визуализация.svg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="container">
      <h1>Главная</h1>
      <div className="image-holder">
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Home;
