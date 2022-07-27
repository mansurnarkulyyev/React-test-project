import React from 'react';
import { connect } from 'react-redux';

export const withAuthNavigate = (Component) => {


let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth, 
})
    
    class NavigateComponent extends React.Component {
        render() {
      
            // if (this.props.isAuth) return <Navigate to={'/login'} />
            return <Component {...this.props} />

        }
    }

let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)


    return ConnectedAuthNavigateComponent;
};