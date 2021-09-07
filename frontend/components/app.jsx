import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import HeaderContainer from "./landingpage/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/singup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import LandingPageContainer from "./landingpage/landing_page_container";
import UserShowContainer from "./user/user_show_container";
import HeaderConatiner from './landingpage/header_container';
import ListingIndexContainer from "./search_bar/listing_index_container";




const App = (props) => {

    return (
        <>
        < HeaderConatiner />
        <Route exact path = "/listings/:city" component={ListingIndexContainer}/>
        <Route exact path = "/listings/" component={ListingIndexContainer}/>
        <Route exact path ="/" component={LandingPageContainer}/>
        <ProtectedRoute exact path ="/user/:userId" component= {UserShowContainer}/>
        <AuthRoute exact path ="/login" component = {LoginFormContainer}/>
        <AuthRoute exact path ="/signup" component = {SignupFormContainer} />
        </>
    )
}
export default App