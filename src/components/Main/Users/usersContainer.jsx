import React from "react";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
} from "Redux/users-reducer";
import Users from "./Users";
import axios from 'axios';
import Preloader from "components/commons/Preloader";


const { connect } = require("react-redux");

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(response => {
                // console.log(response.data);
                this.props.toggleIsFetching(false);

                this.props.setUsers(response.data);
                // console.log(response.data.headers);
                this.props.setUsersTotalCount(response.data.totalCount)
                // this.props.setTodosTotalCount(response.headers['x - total - count'])

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);

                this.props.setUsers(response.headers['x - total - count']);
            })
    }


    render() {



        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalTodosCount={this.props.totalTodosCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.props.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
        totalCountUsers: state.usersPage.totalCountUsers,// upageSize и totalCountUsers с redux-store приходит
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
})(UsersContainer);