import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import ListingItem from "./listing_index_item";
import MapConatiner from "./map_container";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        listings: this.props.listings
      }
  }

  componentDidMount() {
    this.props.fetchListings(this.props.match.params.city);
  }
s
  componentDidUpdate(prevProps){
    if (this.props.match.params.city !== prevProps.match.params.city){
      
      this.props.fetchListings(this.props.match.params.city);
      this.setState({listings: this.props.listings});
      console.log(this.state.listings);
      this.forceUpdate()
    }
    if (this.props.listings.length !== prevProps.listings.length){
      this.setState({listings: this.props.listings})
      this.forceUpdate()
    }
   
  }

  render() {
    let listings = this.state.listings.map((listing, i) => (
      <ListingItem key={`${listing.title}${i}${this.state.listings.length}`} listing={listing} />
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
