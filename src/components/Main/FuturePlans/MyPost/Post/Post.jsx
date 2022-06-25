import React from "react";

import st from 'components/Main/FuturePlans/MyPost/Post/Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={st.post}>
        <img
          className={st.postImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsglCp0hj5iMtVJiO0IqH3BbbAk1kyk3-MQ&usqp=CAU"
          alt="team first person"
        />
        <p className={st.postText}>fyvghbkjljn</p>
      </div>
      <span>Like: </span>
    </div>
  );
};

export default Post;
