import mapboxgl from '!mapbox-gl'
import { AddToHomeScreen } from '@material-ui/icons';
import React from 'react'
import { useEffect, useLayoutEffect } from "react";
import { render } from 'react-dom';
import { withRouter } from 'react-router'






class Map extends React.Component {


  constructor(props){
    super(props)
    this.map;
  }


  componentDidMount(){
     this.props.fetchListings()
    //  listings = listings.map(listing => [listing.longitude, listing.latitude ])
    
    mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw';
      this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [0.1278, 51.5074],
      zoom: 7,
    });
    
    // debugger
  //  new mapboxgl.Marker().setLngLat([0.1278, 51.5074]).addTo(map)

  }


   
    



    // let listings = props.listings.map(listing=> [listing.longitude, listing.latitude] )
    
    

    // useEffect(() => {
    //     map = new mapboxgl.Map({
    //           container: "mapContainer",
    //           style: "mapbox://styles/mapbox/dark-v10",
    //           center: [0.1278, 51.5074],
    //           zoom: 7,
    //         });
    //         new mapboxgl.Marker().setLngLat([0.1278, 51.5074]).addTo(map)
    //   }, []);

      // let marker = new mapboxgl.Marker().setLngLat([0.1278, 51.5074]).addTo(map)


    


      // new mapboxgl.Marker().setLngLat([0.1278, 51.5074]).addTo(map)


      render(){
      this.props.listings.forEach(listing=> new mapboxgl.Marker().setLngLat([listing.longitude, listing.latitude]).addTo(this.map))
      return <div id="mapContainer" ></div>;
      }
   

}

export default withRouter(Map)