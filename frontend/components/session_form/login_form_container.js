import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';



const mapSTP = state => {
    return {
    user: {email: "", password: ""},
    errors: state.errors
}}

const mapDTP = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(LoginForm)