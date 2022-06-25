import React from "react";
import SidebarForm from "components/Sidebar/Team/SidebarForm/SidebarForm";
import st from "components/Sidebar/Team/Team.module.css";

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
          src="./images/team/Ellipse 5-2.svg"
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
          src="./images/team/Ellipse 5.svg"
          alt="person"
        />
        <p className={st.teamText}>Steve Rogers</p>
      </li>
      <li className={st.teamItemAdd}>
        <a href="/">
          <img
            className={st.teamAdd}
            src="./images/naw/Group 3678.svg"
            alt="team add"
          />
          <p className={st.teamAddText}>Add New Contact</p>
        </a>
      </li>
    </ul>
  );
};
export default Team;
