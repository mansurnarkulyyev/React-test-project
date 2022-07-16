import React from "react";
import { addPostActionCreator, updateNewPostText } from "Redux/future-reducer";

import MyPost from "./MyPost";


const MyPostContainer = (props) => {
    let state = props.store.getState();
    // console.log(state);

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostText(text);
        props.store.dispatch(action);
    }

    return (<MyPost updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.futurePage.posts}
        newPostText={state.futurePage.newPostText}
    />)
};

export default MyPostContainer;
