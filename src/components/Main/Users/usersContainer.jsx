import React from "react";
import {
    follow,
    // setUsers,
    unfollow,
    setCurrentPage,
    // setUsersTotalCount,
    // toggleIsFetching,
    toggleFollowingProgress,
    // getUsersThunkCreator,
    getUsers,
} from "Redux/users-reducer";
import Users from "./Users";
// import axios from 'axios';
import Preloader from "components/commons/Preloader";
import { withAuthNavigate } from "hoc/withAuthNavigate";
import { compose } from "redux";
// import { usersAPI } from "api/api";


const { connect } = require("react-redux");

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data);//
        //         this.props.setUsersTotalCount(['x-total-count'])
        //     })
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);

        //         this.props.setUsers(data);
        //         // console.log(response.data.headers['x - total - count']);
        //     })
    }


    render() {
        // console.log(this.onPageChanged());


        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => { // принимает глобальный стейт
    return {
        users: state.usersPage.users,  // возврашает новый объект с данными которые нам ну
        //usersPage с redux-store приходит
        //как в примере ниже
        //         let reducers = combineReducers({
        //             usersPage: usersReducer,
        //         })
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,// upageSize и totalCountUsers с redux-store приходит
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        follow,
        unfollow,
        // setUsers,
        setCurrentPage,
        // setUsersTotalCount,
        // toggleIsFetching,
        toggleFollowingProgress,
        getUsers,
    }),
)(UsersContainer);
