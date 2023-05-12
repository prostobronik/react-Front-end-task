import React from "react";
import s from "./SubMenu.module.scss";
import arrowRight from "../../assets/image/arrow-right.png";

const SubMenu = () => {
  return (
    <div className={s.conteiner}>
      <div className={s.menu}>
        <a href="/#">
          <span>Post Header</span>

          <img src={arrowRight} alt="стрелка" />
        </a>
        <a href="/#">
          <span>Post Layout</span>
          <img src={arrowRight} alt="стрелка" />
        </a>
        <a href="/#">
          <span> Share Buttons</span>

          <img src={arrowRight} alt="стрелка" />
        </a>
        <a href="/#">
          <span>Gallery Post</span>

          <img src={arrowRight} alt="стрелка" />
        </a>
        <a href="/#">
          <span>Video Post</span>
          <img src={arrowRight} alt="стрелка" />
        </a>
      </div>
    </div>
  );
};

export default SubMenu;
