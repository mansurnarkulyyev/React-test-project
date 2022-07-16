// import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostText } from "Redux/future-reducer";
// import StoreContext from "StoreContext";

import MyPost from "./MyPost";


// const MyPostContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let onPostChange = (text) => {
//                     let action = updateNewPostText(text);
//                     store.dispatch(action);
//                 }
//                 return <MyPost updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.futurePage.posts}
//                     newPostText={state.futurePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     );
// };


let mapStateToProps = (state) => {
    return {
        posts: state.futurePage.posts,
        newPostText: state.futurePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostText(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }

}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
