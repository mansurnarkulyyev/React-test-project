import React from "react";

import st from "components/Sidebar/DarkTheme/DarkTheme.module.css";

const DarkTheme = () =>{
    return(
        <div className={st.darkTheme}>
            <p>Dark theme</p>
            <label className={st.switch}>
                <input type="checkbox" defaultChecked />
                <span className={`${st.slider} ${st.round}`}></span>
            </label>
        </div>
    )
};
export default DarkTheme;