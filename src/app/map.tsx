import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const defaultCenter = {
  lat: 34.0522, lng: -118.2437 // これはLos Angelesの座標です
};

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [selected, setSelected] = useState<google.maps.LatLngLiteral | null>(null);

  const onSuccess = (position: Position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return (
    <div className="">
      <LoadScript googleMapsApiKey="AIzaSyCIZaNTMguDQhAvVsGQZ2itWieKndoUj0E">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition ? currentPosition : defaultCenter}
          zoom={10}
        >
          {
            currentPosition && (
              <Marker
                position={currentPosition}
                onClick={() => setSelected(currentPosition)}
              />
            )
          }
          {
            selected && (
              <InfoWindow
                position={selected}
                onCloseClick={() => setSelected(null)}
              >
                <p>You are here</p>
              </InfoWindow>
            )
          }
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
