import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from "./components/root"
import {signup, login, logout} from "./actions/session_actions"


document.addEventListener("DOMContentLoaded", ()=>{
    window.signup = signup
    window.login = login
    window.logout = logout

    let root = document.getElementById('root')
    let store = configureStore()
    window.store = store 

    ReactDOM.render(<Root store = {store}/>, root)
})
