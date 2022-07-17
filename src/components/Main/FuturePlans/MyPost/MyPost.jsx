import React from "react";
import Post from "components/Main/FuturePlans/MyPost/Post/Post";
// import { addPostActionCreator, updateNewPostText } from "Redux/future-reducer";

import st from "components/Main/FuturePlans/MyPost/MyPost.module.css";


const MyPost = (props) => {
  // let state = props.store.getState().futurePage;
  let postElement = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
    // let action = addPostActionCreator()
    // props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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

      <button className={st.button} onClick={onAddPost}>
        <p className={st.buttonText}>Add New Post</p>
      </button>

      {postElement}

    </div>
  );
};

export default MyPost;
