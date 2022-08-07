import React from "react";
import st from "components/Main/FuturePlans/FuturePlans.module.css";
import MyPostContainer from "./MyFuturePosts/MyFuturePostsContainer";
import FutureInfo from "./FutureInfo/FutureInfo";

const FuturePlans = (props) => {
  // debugger
  return (
    <div className={st.list}>
      <div className={st.listMenu}>
        <p className={st.topic}>Your Posts</p>
        <FutureInfo comments={props.comments} />
        <MyPostContainer
        // store={props.store}
        />
      </div>
    </div>
  );
};

export default FuturePlans;
