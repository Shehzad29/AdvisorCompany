import React, { useState, useEffect } from 'react';
import GMap from './gmap';
 
// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyAAp7jAnUzIvioaKZA3SsSp1G6mUWX4Ako';
 
// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}
 
const Maps = () => {
  const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
 
  return (
    <div className="App">
      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
  );
}
 
export default Maps;