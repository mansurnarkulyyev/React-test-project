import React from "react";
import VectorSearch from "../../../images/icon/Vector-search.svg"

import st from 'components/Sidebar/Team/SidebarForm/SidebarForm.module.css';

const SidebarForm = (props) => {
    return (
        <div>
            <form className={st.sidebarForm} action="/action_page.php">
                <input className={st.sidebarInput} id="text" type="text" placeholder="Enter a name" />
                <img className={st.sidebarSearch} src={VectorSearch} alt="search" />
            </form>
        </div>
    )
};
export default SidebarForm;