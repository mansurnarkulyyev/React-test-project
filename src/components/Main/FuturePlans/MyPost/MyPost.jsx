import React from "react";
import Post from "components/Main/FuturePlans/MyPost/Post/Post";

import st from "components/Main/FuturePlans/MyPost/MyPost.module.css";

const MyPost = (props) => {

  let postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  }

  return (
    <div>
      <form className={st.textForm}>
        <textarea
          className={st.textAr}
          type="text"
          placeholder="Type some post!"
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </form>

      <button className={st.button} onClick={addPost}>
        <p className={st.buttonText}>Add New Post</p>
      </button>

      {postElement}

    </div>
  );
};

export default MyPost;
