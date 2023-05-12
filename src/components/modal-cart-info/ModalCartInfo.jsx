import React, { useRef } from "react";
import s from "./ModalCartInfo.module.scss";
import close from "../../assets/image/close.png";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
const ModalCartInfo = ({ popupValue, visiblePopup, setPopupCart }) => {
  const { autor, date, img, img_2x, tags, text, title, views } = popupValue;

  const ref = useRef(null);
  useOnClickOutside(ref, () => setPopupCart(false));

  return (
    <div className={s.modal_popup} ref={ref}>
      <img
        src={close}
        alt="Закрыть"
        className={s.close}
        onClick={visiblePopup}
      />
      <div className={s.container}>
        <div className={s.avatar}>
          <img src={img} alt="Фоновая картинка карточки" srcSet={img_2x} />
        </div>
        <span>{tags}</span>
        <h2>{title}</h2>
        <div>
          <h3>{autor}</h3> <data>{date}</data> <h4>{views} Views</h4>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalCartInfo;
