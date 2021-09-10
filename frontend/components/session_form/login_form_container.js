import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import {clearErrors} from '../../actions/session_actions'




const mapSTP = state => {
    return {
    user: {email: "", password: ""},
    errors: state.errors
}}

const mapDTP = dispatch => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: () => dispatch(openModal('signup'))
})

export default connect(mapSTP, mapDTP)(LoginForm)