import React from "react";
import chevronRight from "../../images/icon/ChevronRight.svg"
import vectorSearch from "../../images/icon/Vector-search.svg";
import ProfilePhoto from "../../images/ProfilePhoto.svg";
import st from "components/Main/Header/Header.module.css";

const Header = (props) => {
  return (
    <header className={st.header}>
      <a href="navbar">
        {/* <Logo /> */}
        {/* <svg className={st.chevronRight}>
          <use href={logo + "#paint0_linear_6_707"} />
        </svg> */}
        <img
          className={st.chevronRight}
          src={chevronRight}
          alt="chevron right img"
        />
      </a>
      <div className={st.search}>
        <form className={st.searchForm}>
          <img
            className={st.searchIcon}
            src={vectorSearch}
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
        <img src={ProfilePhoto} alt="profilePhoto" />
        <p className={st.ownerText}>Frank Sinatra</p>
      </div>
    </header>
  );
};
export default Header;
