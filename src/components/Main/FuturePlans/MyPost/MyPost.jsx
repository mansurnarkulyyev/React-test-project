import React from "react";
import Post from "components/Main/FuturePlans/MyPost/Post/Post";

import st from "components/Main/FuturePlans/MyPost/MyPost.module.css";

const MyPost = (props) => {
  
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

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
      
        {postElement}

    </div>
  );
};

export default MyPost;
