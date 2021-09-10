import mapboxgl from '!mapbox-gl'
import React from 'react'






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
    const nav = new mapboxgl.NavigationControl()
    this.map.addControl(nav, 'top-right')
  }

  componentDidUpdate(){
    this.props.listings.forEach(listing=> 
                                        new mapboxgl.Marker().setLngLat([listing.longitude, listing.latitude]).addTo(this.map)
                                        .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing))))
  }

  marker(listing) {
    return (
      
      `<div> 
      <img src=${listing.photos[0]} width="200" height="200" />
      <h4 > 
        ${listing.title}
      </h4>
      <p>
      ${listing.price} galleons/night
      </p>
      </div>`
    )
  }


  render(){
    return <div id="mapContainer" ></div>
  }
   

}

export default Map