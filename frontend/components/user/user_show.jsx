import React from "react";
import { Link } from "react-router-dom";

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user[0]
  }


  componentDidMount(){
    this.props.fetchUser(this.props.id)
  }

  componentDidUpdate(prevProps){
    if(this.props.user[0].user_reservations.length !== prevProps.user[0].user_reservations.length){
      this.setState({['user_reservations']: this.props.user[0].user_reservations})
    } else if (this.props.user[0].user_listing.length !== prevProps.user[0].user_listing.length) {
      this.setState({['user_listing']: this.props.user[0].user_listing}) 
    }
  }

  render() {
    if (!this.props.user) return null;
    let reservations = this.state.user_reservations.map((reservation, i) =>(
      <li className="showlisting" key={`${reservation}${i}`}>
        <img src={reservation.photo[0]} className="resphotouser" />
        <Link className="link" to={`/reservation/${reservation.id}`}>{reservation.res_listing.title} in {reservation.res_listing.city}</Link>
      </li>
    ))
    let listings = this.state.user_listing.map((listing, i) => (
      <Link className="imglink" to={`/listing/${listing.id}`}>
        <li className="showlisting" key={`${listing} ${i}`}>
          <div className="listingimg">
            <img
              className="listing-img"
              src={listing.photos[0]}
              width="250"
              height="200"
            />
          </div>
          <br />
          <h4>{listing.title}</h4>
        </li>
      </Link>
    ));

    return (
      <div className="usershow">
        <div className="userInfo">
          <h4 className="titles">
            Welcome to {this.state.name}'s profile 
          </h4>
          <p>{this.state.bio}</p>
        </div>

        <ul className="userlistings">
          <h4 className="titles">Listings by you</h4>
          {listings}
          <button className="makenewlisting">
            <Link className="user-link" to="/new/listing">
              Add a new listing
            </Link>
          </button>
        </ul>

        <ul className="userlistings">
          <h4 className="titles">Your trips</h4>
          {reservations}
        </ul>
      </div>
    );
  }
}

export default ShowUser;
