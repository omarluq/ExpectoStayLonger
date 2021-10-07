import { connect } from "react-redux";
import React from "react";
import CreateReservation from "./create_reservation";
import { createReservation } from "../../actions/reservation_actions";
import { withRouter } from "react-router";
import { openModal } from "../../actions/modal_actions";

const mapSTP = (state, ownProps) => {
  return {
    reservation: {
      start_date: "",
      end_date: "",
      guest_id: state.session.id,
      listing_id: ownProps.match.params.listingId,
      total_price: 0,
      num_of_guests: null
    },
    listingPrice: state.listings[ownProps.match.params.listingId].price,
    bloackedDates: state.listings[ownProps.match.params.listingId].reservations,
    num_of_beds: state.listings[ownProps.match.params.listingId].num_of_beds
  };
};
const mapDTP = (dispatch) => ({
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  openModal: () => dispatch(openModal("login")),
});

export default withRouter(connect(mapSTP, mapDTP)(CreateReservation));
