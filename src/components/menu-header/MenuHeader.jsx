import React from "react";
import s from "./MenuHeader.module.scss";
import arrowBottom from "../../assets/image/arrow-bottom.png";
import SubMenu from "../submenu-header/SubMenu";

const MenuHeader = () => {
  return (
    <div className={s.conteiner}>
      <div className={s.menu_item}>
        <a href="/#">
          Demos
          <img src={arrowBottom} alt="" />
        </a>
        <div className={s.submenu}>
          <SubMenu />
        </div>
      </div>
      <div className={s.menu_item}>
        <a href="/#">
          Post
          <img src={arrowBottom} alt="" />
        </a>
        <div className={s.submenu}>
          <SubMenu />
        </div>
      </div>
      <div className={s.menu_item}>
        <a href="/#">
          Features
          <img src={arrowBottom} alt="" />
        </a>
        <div className={s.submenu}>
          <SubMenu />
        </div>
      </div>
      <div className={s.menu_item}>
        <a href="/#">
          Categories
          <img src={arrowBottom} alt="" />
        </a>
        <div className={s.submenu}>
          <SubMenu />
        </div>
      </div>
      <div className={s.menu_item}>
        <a href="/#">
          Shop
          <img src={arrowBottom} alt="" />
        </a>
        <div className={s.submenu}>
          <SubMenu />
        </div>
      </div>
      <div className={s.menu_item}>
        <a href="/#">Buy How</a>
      </div>
    </div>
  );
};

export default MenuHeader;
