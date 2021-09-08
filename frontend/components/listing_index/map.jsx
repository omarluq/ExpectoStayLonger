import mapboxgl from '!mapbox-gl'
import React from 'react'
import { withRouter } from 'react-router'






class Map extends React.Component {


  constructor(props){
    super(props)
    this.map;
  }


  componentDidMount(){

      this.props.fetchListings()
      mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw';
      this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [0.1278, 51.5074],
      zoom: 7,
    })
  }

  componentDidUpdate(){
    this.props.listings.forEach(listing=> new mapboxgl.Marker().setLngLat([listing.longitude, listing.latitude]).addTo(this.map))
  }


  render(){
    return <div id="mapContainer" ></div>;
  }
   

}

export default withRouter(Map)