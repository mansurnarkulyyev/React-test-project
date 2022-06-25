import React from "react";
import { Link } from "react-router-dom";

import st from "components/Main/Navbar/Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={st.navbar}>
      <ul className={st.list}>
        <p className={st.topic}>Your Topics</p>
        <li className={st.item}>
          <Link to="/messages">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}>My Messages</h1>
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/myPast">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}>My Past</h1>
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/future">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}>Future Plans</h1>
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/navbar">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}>What I Believe</h1>
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}>Projects</h1>
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}>My Setup</h1>
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/">
            <img src="./images/icon/Vector.svg" alt="vector" />
            <h1 className={st.title}> Thoughts on Topics</h1>
          </Link>
        </li>
        <button className={st.button}>
          <p className={st.buttonText}>Add New Topic</p>
          <img
            src="./images/icon/plus.svg"
            alt="add topic"
            className={st.buttonImg}
          />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
