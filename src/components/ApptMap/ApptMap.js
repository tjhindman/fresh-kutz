import React from "react";

import { Map } from "./Map/Map";

import "./ApptMap.css";

export const ApptMap = () => {
  return (
    <div style={{ display: "flex", height: "60vh" }}>
      <div className="apptWrap">
        <h2>Book an Appointment Today!</h2>
        <button>Donald</button>
        <button>Lamont</button>
      </div>
      <div className="mapWrap">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
};
