import { connect } from 'react-redux';
import React from 'react';
import LandingPage from './landing_page';
import { logout } from '../../actions/session_actions';


const mapSTP = state => {
    return {
    user: state.user,
    session: state.session
}}

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(LandingPage)