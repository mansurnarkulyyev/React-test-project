import React from "react";

import st from "components/Main/Header/Header.module.css";

const Header = (props) => {
  return (
    <header className={st.header}>
      <a href="navbar">
        <img
          className={st.chevronRight}
          src="./images/icon/Chevron Right.svg"
          alt="chevron right img"
        />
      </a>
      <div className={st.search}>
        <form className={st.searchForm}>
          <img
            className={st.searchIcon}
            src="./images/icon/Vector-search.svg"
            alt="search"
          />
          <input
            className={st.searchInput}
            type="text"
            placeholder="What are you looking for?"
          />
        </form>
      </div>
      <div className={st.profileOwner}>
        <img src="./images/Profile photo.svg" alt="profilePhoto" />
        <p className={st.ownerText}>Frank Sinatra</p>
      </div>
    </header>
  );
};
export default Header;
