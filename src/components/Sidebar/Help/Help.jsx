import React from "react";

import st from 'components/Sidebar/Help/Help.module.css';

const Help = () =>{
    return(
        <div className={st.help}>
        <a className={st.helpItem} href="/">
            <img className={st.helpIcon} src="./images/icon/help 1.svg" alt="help" />
            <p className={st.helpText}>Help</p>
        </a>
    </div>
    )
};

export default Help;
