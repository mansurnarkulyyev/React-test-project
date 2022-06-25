import React from "react";

import st from 'components/Sidebar/Team/SidebarForm/SidebarForm.module.css';

const SidebarForm = (props)=>{
    return(
          <div>
            <form className={st.sidebarForm} action="/action_page.php">
                <input className={st.sidebarInput} type="text" placeholder="Enter a name" />
                <img className={st.sidebarSearch} src="./images/icon/Vector-search.svg" alt="search" />
            </form>
        </div>
    )
};
export default SidebarForm;