import React from "react";
import s from "./CardItem.module.scss";

const CardItem = (props) => {
  const { autor, date, img, img_2x, tags, text, title, views, onChange } =
    props;

  const handlePopup = () => {
    onChange(props);
  };

  return (
    <div className={s.container} onClick={handlePopup}>
      <img
        src={img}
        alt="Фоновая картинка карточки"
        srcSet={img_2x}
        width="360px"
        height="230px"
      />
      <span>{tags}</span>
      <h2>{title}</h2>
      <div>
        <h3>{autor}</h3> <data>{date}</data> <h4>{views} Views</h4>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CardItem;
