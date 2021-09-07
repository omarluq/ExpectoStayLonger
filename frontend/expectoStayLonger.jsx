import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from "./components/root"
import {fetchListings} from "./actions/listing_actions"

document.addEventListener("DOMContentLoaded", ()=>{
    let store;
    if (window.currentUser) {
        const preloadedstate = {
            session: {id: window.currentUser.id},
            user: {[window.currentUser.id]: window.currentUser}
        }
        store = configureStore(preloadedstate)
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.fetchListings = fetchListings
    let root = document.getElementById('root')
    ReactDOM.render(<Root store = {store}/>, root)
})
