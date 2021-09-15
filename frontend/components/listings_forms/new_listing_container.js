import { connect } from "react-redux";
import React from "react";
import { createListing } from "../../actions/listing_actions";
import NewListing from "./new_listing";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapSTP = (state) => ({
  listing: {
    host_id: "",
    title: "",
    description: "",
    street_address: "",
    city: "",
    country: "",
    postcode: "",
    price: "",
    num_of_beds: "",
    longitude: "",
    latitude: "",
    house_elf: "false",
    owl_friendly: "false",
    photos: [],
    photoUrl: null,
    photoFile: null,
  },
  session: state.session,
});

const mapDTP = (dispatch) => ({
  createListing: (listing) => dispatch(createListing(listing)),
  spinner: ()=> dispatch(openModal("spinner")),
  closeSpinner: () => dispatch(closeModal())
});

export default connect(mapSTP, mapDTP)(NewListing);
