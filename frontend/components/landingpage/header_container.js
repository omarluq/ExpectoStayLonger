import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router'



const mapSTP = state => {
    return {
    user: state.user,
    session: state.session
}}

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapSTP, mapDTP)(Header))