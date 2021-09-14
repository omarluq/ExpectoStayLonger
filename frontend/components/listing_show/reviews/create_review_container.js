import { connect } from "react-redux";
import React from "react";
import CreateReview from "./create_review";
import { createReview } from "../../../actions/review_actions";
import { fetchListing } from "../../../actions/listing_actions";
import { withRouter } from "react-router";

const mapSTP = (state, ownProps) => ({
  review: {
    body: "",
    rating: "",
    reviewer_id: state.session.id,
    listing_id: ownProps.match.params.listingId,
  },
});

const mapDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
});

export default withRouter(connect(mapSTP, mapDTP)(CreateReview));
