import React, { useCallback } from "react";
import s from "./Search.module.scss";
import searchIcon from "../../assets/image/Search.png";
import debounce from "lodash.debounce";
const Search = ({ searchItems }) => {
  // eslint-disable-next-line
  const updateSearchValue = useCallback(
    debounce((str) => {
      searchItems(str);
    }, 500),
    []
  );

  const handleChange = (e) => {
    updateSearchValue(e.target.value);
  };

  return (
    <div className={s.root}>
      <img src={searchIcon} alt="Поиск" />
      <input className={s.input} onChange={handleChange} />
    </div>
  );
};

export default Search;
