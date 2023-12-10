import React, { useEffect, useRef } from 'react';
 
const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;
 
  useEffect(() => {
    googleMap = initGoogleMap();
    createMarker();
  }, []);
 
 
  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 43.676655
        , lng: -79.410475
    },
      zoom: 10
    });
  }
 
  // create marker on google map
  const createMarker = () => new window.google.maps.Marker({
    position: { lat: 43.676655
        , lng: -79.410475
    },
    map: googleMap
  });
 
  return <div
    ref={googleMapRef}
    style={{ width: 548, height: 500 }}
  />
}
 
export default GMap;