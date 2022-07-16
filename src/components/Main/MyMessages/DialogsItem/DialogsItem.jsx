import React from "react";

import st from "./DialogsItem.module.css";

import { Link } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs" + props.id;
  return (
    <nav>
      <Link to={path}>
        <li className={st.teamItem + " " + st.active}>
          <img className={st.teamImg} src={props.src} alt="person" />
          <p className={st.teamText}>{props.name}</p>
        </li>
      </Link>
    </nav>
  );
};

export default DialogItem;
