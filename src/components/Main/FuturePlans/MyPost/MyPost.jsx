import React from "react";
import Post from 'components/Main/FuturePlans/MyPost/Post/Post';

import st from "components/Main/FuturePlans/MyPost/MyPost.module.css";

const MyPost = () => {
  return (
    <div>
      <form className={st.search}>
        <input
          className={st.searchInput}
          type="text"
          placeholder="Type some post!"
        />
      </form>

      <button className={st.button}>
        <p className={st.buttonText}>Add New Post</p>
      </button>

      <Post/>
      {/* <Post message="hi how are you?" likesCount= '0'/>
       <Post  message="What do you do?" likesCount='45'/> */}
    </div>
  );
};

export default MyPost;
