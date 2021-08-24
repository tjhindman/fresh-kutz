import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

export const Map = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 39.86156, lng: -86.19818 }}
      >
        <Marker position={{ lat: 39.86156, lng: -86.19818 }} />
      </GoogleMap>
    );
  })
);
