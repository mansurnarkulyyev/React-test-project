import React from "react";
import Post from "components/Main/FuturePlans/MyPost/Post/Post";

import st from "components/Main/FuturePlans/MyPost/MyPost.module.css";

const MyPost = (props) => {
  
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

let newPostElement = React.createRef();

let addPost = () => {
  props.addPost();
}

let onPostChange = ()=>{
  let text = newPostElement.current.value;
  props.updateNewPostText(text)
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
