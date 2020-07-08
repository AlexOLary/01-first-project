import React from "react";
import {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAutoRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);


    return ConnectedAuthRedirectComponent;
}