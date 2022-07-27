import React from "react";
import Header from "./Header";
// import axios from 'axios';


class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     // this.props.toggleIsFetching(true);
    //     axios.get(`https://jsonplaceholder.typicode.com/users`, {
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             // console.log(response.data);
    //             // debugger
    //             // this.props.toggleIsFetching(false);

    //             // this.props.setUsers(response.data);
    //             // console.log(response.data.headers);
    //             // this.props.setUsersTotalCount(response.data.totalCount)
    //             // this.props.setTodosTotalCount(response.headers['x - total - count'])

    //         })
    // }

    render() {
        return (<Header {...this.props} />);
    }
};
export default HeaderContainer;
