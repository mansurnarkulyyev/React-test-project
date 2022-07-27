import { usersAPI } from "api/api";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Header from "./Header";
// import axios from 'axios';
// import getAuthUserData from "Redux/auth-reducer"


class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.getAuthUserData()
        usersAPI.getUsersForHeader()
            .then(response => {
                // console.log(response.data);
                // debugger
                // this.props.toggleIsFetching(false);

                // this.props.setUsers(response.data);
                // console.log(response.data.headers);
                // this.props.setUsersTotalCount(response.data.totalCount)
                // this.props.setTodosTotalCount(response.headers['x - total - count'])

            })
    }

    render() {
        return (<Header {...this.props} />);
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default compose(
    connect(mapStateToProps,)
)(HeaderContainer);


