import React from "react";
import s from "./MobileMenu.module.scss";
import close from "../../assets/image/close.png";
import Logo from "../../assets/image/Logo";
import arrowBottom from "../../assets/image/arrow-bottom.png";
import SubMenu from "../submenu-header/SubMenu";

const MobileMenu = ({ visibleMobailMenu }) => {
  return (
    <>
      <div className={s.header_mobile_menu}>
        <Logo />
        <img src={close} alt="Закрыть" onClick={visibleMobailMenu} />
      </div>
      <div className={s.menu_mobail}>
        <div className={s.menu_item_content}>
          <div className={s.menu_item}>
            <a href="/#">
              Demos
              <img src={arrowBottom} alt="" />
            </a>
            <div className={s.submenu}>
              <SubMenu />
            </div>
          </div>
        </div>
        <div className={s.menu_item_content}>
          <div className={s.menu_item}>
            <a href="/#">
              Post
              <img src={arrowBottom} alt="" />
            </a>
            <div className={s.submenu}>
              <SubMenu />
            </div>
          </div>
        </div>
        <div className={s.menu_item_content}>
          <div className={s.menu_item}>
            <a href="/#">
              Features
              <img src={arrowBottom} alt="" />
            </a>
            <div className={s.submenu}>
              <SubMenu />
            </div>
          </div>
        </div>
        <div className={s.menu_item_content}>
          <div className={s.menu_item}>
            <a href="/#">
              Categories
              <img src={arrowBottom} alt="" />
            </a>
            <div className={s.submenu}>
              <SubMenu />
            </div>
          </div>
        </div>
        <div className={s.menu_item_content}>
          <div className={s.menu_item}>
            <a href="/#">
              Shop
              <img src={arrowBottom} alt="" />
            </a>
            <div className={s.submenu}>
              <SubMenu />
            </div>
          </div>
        </div>
        <div className={s.menu_item_content}>
          <div className={s.menu_item}>
            <a href="/#">Buy How</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
