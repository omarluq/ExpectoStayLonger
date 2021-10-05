import { connect } from "react-redux";
import React from "react";
import { fetchListings } from "../../actions/listing_actions";
import { withRouter } from "react-router";
import Map from "./map";

// const mapSTP = (state) => ({
//   listings: Object.values(state.listings),
// });

const mapDTP = (dispatch) => ({
  fetchListings: (city) => dispatch(fetchListings(city)),
});

export default withRouter(connect(null, mapDTP)(Map));
