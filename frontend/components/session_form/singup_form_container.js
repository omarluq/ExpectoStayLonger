import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import {clearErrors} from '../../actions/session_actions'



const mapSTP = state => {
    return {
    user: {email: "", name: "", bio:"", password: ""},
    errors: state.errors
}}

const mapDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: () => dispatch(openModal('login'))

})

export default connect(mapSTP, mapDTP)(SignUpForm)