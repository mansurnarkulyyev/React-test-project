import React from "react";
// import axios from 'axios';
import { getCommentsProfile } from "Redux/future-reducer";
import FuturePlans from "./FuturePlans";
import { connect } from "react-redux";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
// import { usersAPI } from "api/api";

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
        this.props.getCommentsProfile(userId);
        // usersAPI.getComments(userId).then(response => {
        //     // this.props.toggleIsFetching(false);
        //     // this.props.toggleIsFetching(true);
        //     this.props.setCommentsProfile(response.data);
        // })
    }
    render() {
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
    getCommentsProfile,
})(withRouter(FuturePlansContainer));
