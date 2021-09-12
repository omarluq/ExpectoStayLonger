import { connect } from 'react-redux'
import React from 'react'
import CreateReservation from './create_reservation'
import { createReservation } from '../../actions/reservation_actions'
import { withRouter } from 'react-router'
import {openModal} from '../../actions/modal_actions'

const mapSTP = (state, ownProps) => {
    // debugger
    return {
    reservation: {start_date: '', end_date: '', guest_id: state.session.id, listing_id: ownProps.match.params.listingId},
    listingPrice: state.listings[ownProps.match.params.listingId].price

}
}
const mapDTP = dispatch => ({
    createReservation: reservation => dispatch(createReservation(reservation)),
    openModal: () => dispatch(openModal('login'))
})

export default withRouter(connect(mapSTP, mapDTP)(CreateReservation))