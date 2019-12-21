import React from "react";
import CustomerCard from "../components/CustomerCard"

const CustomersInfo = () => {
  return (
    <div className="container">
      <h1>Пор заказчиков</h1>
      <CustomerCard
        title="Уральский Федеральный Университет"
        description="Это текст про заказчика, он скорее всего будет достаточно длинным, ну и стоит вставить ещё немного слов"
        org_type="Университет"
        activity_type="Учебная, научная"
        org_size="Крупная"
        img_link="https://urfu.ru/fileadmin/user_upload/common_files/about/brand/UrFULogo_U.png"
        org_place="Екатеринбург"
        courses={["machine-learning", "games", "bots", "robots", "digital-marketing",
          "vr", "web-development", "mobile", "information-systems", "math-modelling"]}
      />
    </div>
  );
};

export default CustomersInfo;
