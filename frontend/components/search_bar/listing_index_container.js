import { connect } from 'react-redux'
import React from 'react'
import { fetchListings } from '../../actions/listing_actions'
import ListingIndex from './listing_index'
import { withRouter } from 'react-router'


const mapSTP = (state) => {
    debugger
    return {
    listings: state.listings
}}


const mapDTP = dispatch => ({
    fetchListings: city => dispatch(fetchListings(city))
})


export default connect(mapSTP, mapDTP)(ListingIndex)




