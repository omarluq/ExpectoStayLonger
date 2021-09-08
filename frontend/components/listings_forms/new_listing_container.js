import { connect } from 'react-redux'
import React from 'react'
import { createListing } from '../../util/listings_api_util'
import NewListing from './new_listing'

const mapSTP = state => ({
    listing: {host_id: '', title: '', description: '', street_address: '', city: '', country: '', postcode: '', price: '', num_of_beds: '', house_elf: '', owl_friendly: ''},
    session: state.session
})


const mapDTP = dispatch => ({
    createListing: listing => dispatch(createListing(listing))  
})


export default connect(mapSTP, mapDTP)(NewListing)