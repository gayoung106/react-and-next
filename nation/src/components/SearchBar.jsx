import { useState } from "react";
import style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !== "") {
      nav(`/search?q=${search}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };
  return (
    <div className={style.container}>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
