import React from "react";
import icon0 from "../../assets/competencies-icons/placeholder.svg" // Изменить на другую
import "../styles/index.css"

const CompetenciesIcons = (props) => {
    switch (props.icon) {
        case "Команда":
            return iconHolder(icon0)
        case "Менеджер":
            return iconHolder(icon0)
        case "Аналитик":
            return iconHolder(icon0)
        case "Разработчик":
            return iconHolder(icon0)
        case "Дизайнер":
            return iconHolder(icon0)
        case "Тестировщик":
            return iconHolder(icon0)

        default:
            return iconHolder(icon0)
    };
};

function iconHolder(icon) {
    return (
        <div className="icon-holder">
            <img src={icon}></img>
        </div>
    )
}

export default CompetenciesIcons;