import React from "react";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import Team from "./Team/Team";
import Help from "./Help/Help";
import DarkTheme from "./DarkTheme/DarkTheme";

import st from "components/Sidebar/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={st.sidebar}>
      {/*  logo and burger  */}
      <SidebarLogo />
      {/* team and sidebarForm */}
      <Team />
      <Help />
      <DarkTheme />
    </div>
  );
};

export default Sidebar;
