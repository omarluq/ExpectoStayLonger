import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LandingPageContainer from "./landingpage/landing_page_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/singup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util"



const App = (props) => {

    return (
        <>
        <Route exact path="/" component = {LandingPageContainer}/>
        <AuthRoute exact path ="/login" component = {LoginFormContainer}/>
        <AuthRoute exact path ="/signup" component = {SignupFormContainer} />
        </>
    )
}
export default App