import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import ListingItem from "./listing_index_item";
import MapConatiner from "./map_container";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listings: this.props.listings}
  }

  componentDidMount() {
    this.props.fetchListings(this.props.match.params.city);
  }

  componentDidUpdate(prevProps){
    if (this.props.listings.length !== prevProps.listings.length){
      this.setState({listings: this.props.listings})
    }
  }

  render() {
    console.log(this.state.listings);
    console.log(this.props.listings);
    
    let listings = this.state.listings.map((listing, i) => (
      <ListingItem key={`${listing.title}${i}`} listing={listing} />
    ));
    return (
      <div className="stays" id="stays">
        <ul className="listings">
          <h4 className="wizarding">Stays in the wizarding world</h4>
          {listings}
        </ul>
        <MapConatiner />
      </div>
    );
  }
}

export default ListingIndex;
