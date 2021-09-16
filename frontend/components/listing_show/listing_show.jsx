import { Button } from "@material-ui/core";
import React from "react";
import CreateReservationConatiner from "../reservation_form/create_reservation_container";
import Review from "./reviews/review_item";
import CreateReviewContainer from "./reviews/create_review_container";

class ListingShow extends React.Component {
  handleDelete() {
    this.props.deleteListing(this.props.match.params.listingId);
    this.props.history.push("/");
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  refersh(){
    this.props.fetchListing(this.props.match.params.listingId);
  }

  render() {
    if (!this.props.listing) return null;
    let deleteButton;
    let createReview;
    if (this.props.listing.host_id === this.props.session.id) {
      deleteButton = (
        <div className="deletecontainer">
          <button
            className="deletelistingbutton"
            onClick={() => this.handleDelete()}
          >
            Delete Listing
          </button>
        </div>
      );
      createReview = <div></div>;
    } else {
      deleteButton = <CreateReservationConatiner />;
      createReview = <CreateReviewContainer refresh={this.refersh.bind(this)} />;
    }
    if (!this.props.session.id){
      createReview = <div></div>;
    }

    let reviews = this.props.listing.reviews.map((review) => (
      <Review
        review={review}
        listingId={this.props.match.params.listingId}
        editReview={this.props.editReview}
        deleteReview={this.props.deleteReview}
        session={this.props.session}
        refresh={this.refersh.bind(this)}
        key={review.id + review.author_id}
      />
    ));

    let houseElf;
    let owlFriendly;
    if (this.props.listing.house_elf) {
      houseElf = <p>This listing comes with a staff of house elves</p>;
    } else {
      houseElf = <p>This listing doesnt come with house elves</p>;
    }
    if (this.props.listing.owl_friendly) {
      owlFriendly = <p>This listing welcomes your owls</p>;
    } else {
      owlFriendly = <p>Keep your owls home they are not welcome here</p>;
    }

    let photos = this.props.listing.photos.map((photo, i) => (
      <img
        className="listinshowimg"
        key={i + i}
        src={photo}
        width="300"
        height="300"
      />
    ));

    return (
      <div className="listingpage">
        <div className="listing-photos">{photos}</div>
        <br />
        <h4 className="listingshowtitle">{this.props.listing.title}</h4>
        <br />
        <div className="listinginfo">
          <div className="listinginfo2">
            <p className="listingshowthumbs">About:</p>
            <p className="listindes">{this.props.listing.description}</p>
            <br />
            <p className="listingshowthumbs">What it offers:</p>
            <p>number of beds: {this.props.listing.num_of_beds} </p>
            <p>number of guests: {this.props.listing.num_of_beds * 2} </p>
            <p>number of baths: {this.props.listing.num_of_beds}</p>
            {houseElf}
            {owlFriendly}
            <br />
            <p className="listingshowthumbs">Location:</p>
            <p>
              {this.props.listing.city}, {this.props.listing.country}
            </p>
          </div>
          <br />
          {deleteButton}
        </div>
        <div className="reviewscontainer">
          {createReview}
          <br />
          <ul className="reviews">
            <h4 className="reviewstitle">All reviews</h4>
            {reviews}
          </ul>
        </div>
      </div>
    );
  }
}
export default ListingShow;
