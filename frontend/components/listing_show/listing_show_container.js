import { connect } from 'react-redux'
import React from 'react'
import ListingShow from './listing_show'
import { editReview, deleteReview } from '../../actions/review_actions'

import {fetchListing, deleteListing} from '../../actions/listing_actions'

const mapSTP = (state, ownProps) => {
    return {
    listing: state.listings[ownProps.match.params.listingId],
    session: state.session
}}


const mapDTP = dispatch => ({
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: revId => dispatch(deleteReview(revId))
})


export default connect(mapSTP, mapDTP)(ListingShow)

