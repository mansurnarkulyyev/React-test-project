import React from "react";
import MyPost from "components/Main/FuturePlans/MyPost/MyPost";

import st from "components/Main/FuturePlans/FuturePlans.module.css";

const FuturePlans = (props) => {
  return (
    <div className={st.list}>
      <div className={st.listMenu}>
        <p className={st.topic}>Your Posts</p>

        <MyPost
          posts={props.posts}
          newPostText={props.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default FuturePlans;
