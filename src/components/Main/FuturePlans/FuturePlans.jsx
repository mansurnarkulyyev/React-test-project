import React from "react";
import st from "components/Main/FuturePlans/FuturePlans.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";

const FuturePlans = (props) => {
  return (
    <div className={st.list}>
      <div className={st.listMenu}>
        <p className={st.topic}>Your Posts</p>

        <MyPostContainer
          store={props.store}
        />
      </div>
    </div>
  );
};

export default FuturePlans;
