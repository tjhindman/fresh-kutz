import React from "react";

import "./ServicesHours.css";

export const ServicesHours = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="servicesWrap">
        <h2>Services</h2>
        <ul style={{ width: "100%" }}>
          <li>Afro</li>
          <li>Eyebrows</li>
          <li>Haircut</li>
          <li>Haircut and Beard</li>
          <li>Kid Haircut (1 - 12)</li>
          <li>Line and Taper</li>
          <li>Line Up (Razor)</li>
          <li>Line Up (Clipper)</li>
          <li>Specialty Cut</li>
          <li>Haircut/Curl Sponge Cut</li>
        </ul>
      </div>
      <div className="hoursWrap">
        <h2>Hours</h2>
        <p>Open 7 days a week!</p>
        <h3>Mon - Fri</h3>
        <p>8am - 6pm</p>
        <h3>Sat - Sun</h3>
        <p>8am - 6pm</p>
      </div>
    </div>
  );
};
