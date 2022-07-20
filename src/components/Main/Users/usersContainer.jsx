// import React from "react";
import { /*followAC*/ setUsersAC, /*unFollowAC */ } from "Redux/users-reducer";
import Users from "./Users";

const { connect } = require("react-redux");

let mapStateToProps = (state) => { // принимает глобальный стейт
    return {
        users: state.usersPage.users  // возврашает новый объект с данными которые нам ну
        //usersPage с redux-store приходит
        //как в примере ниже
        //         let reducers = combineReducers({
        //             usersPage: usersReducer,
        //         })
        // let store = createStore(reducers)

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // follow: (userId) => {
        //     dispatch(followAC(userId))//followAC(userId) это и есть action
        // },
        // unfollow: (userId) => {
        //     dispatch(unFollowAC(userId))
        // },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);