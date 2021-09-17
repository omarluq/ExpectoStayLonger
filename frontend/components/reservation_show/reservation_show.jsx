import React from "react";
import mapboxgl from "!mapbox-gl";

class ShowReservation extends React.Component {
  constructor(props) {
    super(props);
    this.map;
  }

  componentDidMount() {
    this.props.fetchReservation(this.props.match.params.resId);
  }

  componentDidUpdate() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw";
    this.map = new mapboxgl.Map({
      container: "resmapcontainer",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [
        this.props.reservation.listing.longitude,
        this.props.reservation.listing.latitude,
      ],
      zoom: 12,
    });

    new mapboxgl.Marker({color: 'teal'})
      .setLngLat([
        this.props.reservation.listing.longitude,
        this.props.reservation.listing.latitude,
      ])
      .addTo(this.map);
  }

  deleteRes() {
    this.props.deleteReservation(this.props.reservation.id);
    this.props.history.location.pathname = "/";
    this.props.history.replace(`/`);
  }

  render() {
    if (Object.values(this.props.reservation).length === 0) return null;
    let start = new Date(this.props.reservation.start_date);
    let button;
    if (start.getTime() > new Date().getTime()) {
      button = (
        <button onClick={() => this.deleteRes()}>Cancel Reservation</button>
      );
    } else {
      button = <div></div>;
    }
    start = `${start.getMonth() + 1}/${start.getDate()}/${start.getFullYear()}`;
    let end = new Date(this.props.reservation.end_date);
    end = `${end.getMonth() + 1}/${end.getDate()}/${end.getFullYear()}`;
    return (
      <div className="respage">
        <div className="rescontainer">
          <div>
            <img
              className="resimg"
              src={this.props.reservation.photos[0]}
              width="400"
              height="400"
            />
          </div>
          <div id="resmapcontainer" width="400" height="400"></div>
        </div>

        <div className="resinfo">
          <h4 className="restitle">
            Your trip to {this.props.reservation.listing.title}{" "}
          </h4>
          <br />
          <p>check in: {start}</p>
          <p>check out: {end}</p>

          <address>
            Location: <br />
            {this.props.reservation.listing.street_address},{" "}
            {this.props.reservation.listing.city},{" "}
            {this.props.reservation.listing.country},{" "}
            {this.props.reservation.listing.postcode} <br />
          </address>
          <p>Total price: {this.props.reservation.total_price} galleons </p>
          <br />
          {button}
        </div>
      </div>
    );
  }
}

export default ShowReservation;
