// import React from "react";
import { /*followAC*/ setUsersAC, /*unFollowAC */ } from "Redux/users-reducer";
// import Users from "./Users";
import Users from "./UsersClasses";

const { connect } = require("react-redux");

let mapStateToProps = (state) => { // принимает глобальный стейт
    return {
        users: state.usersPage.users,  // возврашает новый объект с данными которые нам ну
        //usersPage с redux-store приходит
        //как в примере ниже
        //         let reducers = combineReducers({
        //             usersPage: usersReducer,
        //         })
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,// upageSize и totalCountUsers с redux-store приходит
        currentPage: state.usersPage.currentPage
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