import React from "react";
import { Link } from "react-router-dom";

import st from 'components/Main/MyMessages/MyMessages.module.css';

const DialogItem = (props)=>{
    let path = "/dialog/" + props.id;
    return(
        <Link to={path}>
        <li className={st.teamItem + ' ' + st.active}>
          <img
            className={st.teamImg}
            src={props.src}
            alt="person"
          />
          <p className={st.teamText}>
           {props.name}
            </p>
        </li>
        </Link>
    )
};

const Messages =(props)=>{
    return(
        <p className={st.message}>{props.message}</p>
    )
}

const MyMessages= ()=>{
    return (
        <div className={st.dialogs}>
 <ul className={st.team}>  

<DialogItem name='Frank Sinatra' id='1' src='./images/team/Ellipse 5-1.svg'/>



        <Link to="/dialog2">
        <li className={st.teamItem}>
          <img
            className={st.teamImg}
            src="./images/team/Ellipse 5-2.svg"
            alt="person"
          />
          <p className={st.teamText}>
          Harvey Specter
          </p>
        </li>
        </Link>
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
      </ul>

      <div className={st.messages}>
         <Messages message='odhbhbcjhbwehjeooooo Message'/>
         <p className={st.message}>'ctuviouououbobunvegompijvwpoimjgvwpnen'</p>
         <p className={st.message}>'ctuviouououbobunvegompijvwpoimjgvwpnen'</p>
         <p className={st.message}>'ctuviouououbobunvegompijvwpoimjgvwpnen'</p>
         <p className={st.message}>'ctuviouououbobunvegompijvwpoimjgvwpnen'</p>
      </div>
        </div>
       
    )
};
export default MyMessages;
