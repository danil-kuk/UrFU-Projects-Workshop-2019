import React from "react";
import icon1 from "../../assets/competencies-icons/team.svg"
import icon2 from "../../assets/competencies-icons/manager.svg"
import icon3 from "../../assets/competencies-icons/analyst.svg"
import icon4 from "../../assets/competencies-icons/developer.svg"
import icon5 from "../../assets/competencies-icons/designer.svg"
import icon6 from "../../assets/competencies-icons/tester.svg"
import icon0 from "../../assets/competencies-icons/placeholder.svg" // Изменить на другую
import "../styles/index.css"

const CompetenciesIcons = (props) => {
    switch (props.icon) {
        case "Команда":
            return iconHolder(icon1)
        case "Менеджер":
            return iconHolder(icon2)
        case "Аналитик":
            return iconHolder(icon3)
        case "Разработчик":
            return iconHolder(icon4)
        case "Дизайнер":
            return iconHolder(icon5)
        case "Тестировщик":
            return iconHolder(icon6)

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