import mapboxgl from "!mapbox-gl";
import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      city: this.props.match.params.city,
    };
    this.map;
    this.markers = [];
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

  componentDidMount() {
    // debugger
    this.props.fetchListings(this.state.city);
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw";
    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [0.1278, 51.5074],
      zoom: 7,
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");
  }

  componentDidUpdate() {
    this.markers.forEach(marker=> {
      marker.remove()
    })
    this.markers = []
      let marker;
     this.state.listings.forEach((listing) => {
      marker =  new mapboxgl.Marker({ color: "teal" })
        .setLngLat([listing.longitude, listing.latitude])
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)));
        this.markers.push(marker)
    })
  }

  // componentWillUnmount() {
    
  // }

  marker(listing) {
    return `<div> 
    <img src=${listing.photos[0]} width="200" height="200" />
    <h4 > 
    ${listing.title}
    </h4>
    <p>
    ${listing.price} galleons/night
    </p>
    </div>`;
  }

  render() {
    return <div id="mapContainer"></div>
  }
}

export default Map;
