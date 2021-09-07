import mapboxgl from '!mapbox-gl'
import React from 'react'
import { useEffect } from "react";




const Map =() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw';


    useEffect(() => {
        new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-74.5, 40],
          zoom: 3,
        });
      }, []);

    return <div id="mapContainer" ></div>;

}

export default Map