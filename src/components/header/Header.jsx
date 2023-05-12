import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import Logo from "../../assets/image/Logo";
import Search from "../search/Search";
import MenuHeader from "../menu-header/MenuHeader";
import burger from "../../assets/image/burger.png";

const Header = ({ visibleMobailMenu, searchItems }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    } // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <div className={`${s.conteiner}  ${show ? s.active : s.hidden}`}>
      <div className={s.header_logo}>
        <div className={s.conteiner_burger}>
          <img
            className={s.burger}
            src={burger}
            alt="Бургер"
            onClick={visibleMobailMenu}
          />
        </div>
        <Logo />
        <Search searchItems={searchItems} />
      </div>
      <div className={s.header_menu}>
        <MenuHeader />
      </div>
    </div>
  );
};

export default Header;
