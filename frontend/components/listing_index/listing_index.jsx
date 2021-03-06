import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import ListingItem from "./listing_index_item";
import MapConatiner from "./map_container";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      city: this.props.match.params.city,
    };
  }

  componentDidMount() {
    this.props.fetchListings(this.state.city);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.city !== prevState.city) {
      nextProps.fetchListings(nextProps.match.params.city);
    }
    return {
      listings: nextProps.listings,
      city: nextProps.match.params.city,
    };
  }

  render() {
    let msg;
    if (!this.state.listings.length) {
      msg = (
        <p className="msg">
          No listings found in {this.props.match.params.city}
        </p>
      );
    } else {
      msg = null;
    }
    let listings = this.state.listings.map((listing, i) => (
      <ListingItem
        key={`${i} + ${this.state.listings.length}`}
        listing={listing}
      />
    ));
    return (
      <div className="stays" id="stays">
        <ul className="listings">
          <h4 className="wizarding">Stays in the wizarding world</h4>
          {listings}
          <br />
          {msg}
        </ul>
        <MapConatiner city={this.state.city} />
      </div>
    );
  }
}

export default ListingIndex;
