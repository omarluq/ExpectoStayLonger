import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';



const mapSTP = state => {
    return {
    user: {email: "", name: "", bio:"", password: ""},
    errors: state.errors
}}

const mapDTP = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mapSTP, mapDTP)(SignUpForm)