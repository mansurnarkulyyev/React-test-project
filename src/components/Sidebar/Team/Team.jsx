import React from "react";
import SidebarForm from "components/Sidebar/Team/SidebarForm/SidebarForm";
import add from "../../images/naw/add.svg";
import person2 from "../../images/team/Ellipse 5-2.svg";
import person5 from "../../images/team/Ellipse 5.svg";
import st from "components/Sidebar/Team/Team.module.css";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <ul className={st.team}>
      <SidebarForm />

      <li className={st.teamItem}>
        <img
          className={st.teamImg}
          src="./images/team/Ellipse 5-1.svg"
          alt="person"
        />
        <p className={st.teamText}>Frank Sinatra</p>
      </li>
      <li className={st.teamItem}>
        <img
          className={st.teamImg}
          src={person2}
          alt="person"
        />
        <p className={st.teamText}>Harvey Specter</p>
      </li>
      <li className={st.teamItem}>
        <img
          className={st.teamImg}
          src="./images/team/Ellipse 5-3.svg"
          alt="person"
        />
        <p className={st.teamText}>Tony Stark</p>
      </li>
      <li className={st.teamItem}>
        <img
          className={st.teamImg}
          src="./images/team/Ellipse 4.svg"
          alt="person"
        />
        <p className={st.teamText}>Jordan Peterson</p>
      </li>
      <li className={st.teamItem}>
        <img
          className={st.teamImg}
          src={person5}
          alt="person"
        />
        <p className={st.teamText}>Steve Rogers</p>
      </li>
      <li className={st.teamItemAdd}>
        <Link to="/users">
          <img
            className={st.teamAdd}
            src={add}
            alt="team add"
          />
          <p className={st.teamAddText}>Add New Contact</p>
        </Link>
      </li>
    </ul>
  );
};
export default Team;
