import React, { useState } from "react";
import s from "./PostsItems.module.scss";
import CardItem from "../../components/card-item/CardItem";
import ModalCartInfo from "../../components/modal-cart-info/ModalCartInfo";

const PostsItems = ({ searchCartItems }) => {
  const [popupCart, setPopupCart] = useState(false);
  const [popupValue, setPopupValue] = useState(null);

  const handlePopup = (value) => {
    setPopupCart(true);
    setPopupValue(value);
  };

  const visiblePopup = () => {
    setPopupCart((prev) => !prev);
  };

  return (
    <>
      {popupCart && (
        <ModalCartInfo
          popupValue={popupValue}
          visiblePopup={visiblePopup}
          setPopupCart={setPopupCart}
        />
      )}
      <div
        className={s.container}
        style={popupCart ? { opacity: "0.1", pointerEvents: "none" } : {}}
      >
        {searchCartItems.map((cart, i) => (
          <CardItem {...cart} key={i} onChange={handlePopup} />
        ))}
      </div>
    </>
  );
};

export default PostsItems;
