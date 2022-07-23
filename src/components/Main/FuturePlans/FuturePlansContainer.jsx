import React from "react";
import axios from 'axios';
import { setCommentsProfile } from "Redux/future-reducer";
import FuturePlans from "./FuturePlans";
import { connect } from "react-redux";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class FuturePlansContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            return <h1>Comments not found!(:</h1>
        }

        // debugger
        // this.props.toggleIsFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/comments/` + userId)
            .then(response => {
                // debugger 
                // this.props.toggleIsFetching(false);

                this.props.setCommentsProfile(response.data);
            })
    }
    render() {
        // debugger
        return (
            <FuturePlans {...this.props}//Profile
                comments={this.props.comments}//передаем в </FutureInfo>
            />
        );
    }
};

let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments, //все информации берем от store.getState().usersPage.users и там сидит все users
})


export default connect(mapStateToProps, {
    setCommentsProfile,
})(withRouter(FuturePlansContainer));
