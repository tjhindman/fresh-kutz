import React from "react";

import "./ServicesHours.css";

export const ServicesHours = () => {
  return (
    <div className="servicesHoursWrap">
      <div className="servicesWrap">
        <h2>Services</h2>
        <ul style={{ width: "100%" }}>
          <li>Eyebrows</li>
          <li>Mustache Line</li>
          <li>Beard Shave</li>
          <li>Afro</li>
          <li>Line and Taper</li>
          <li>Line Up (Razor)</li>
          <li>Line Up (Clipper)</li>
          <li>Haircut</li>
          <li>Haircut and Beard</li>
          <li>Kids Haircut</li>
          <li>Senior Citizen Haircut (60+)</li>
          <li>Haircut/Curl Sponge Cut</li>
          <li>Specialty Cut</li>
        </ul>
      </div>
      <div className="hoursWrap">
        <h2>Hours</h2>
        <p>Open 7 days a week!</p>
        <h3>Mon - Fri</h3>
        <p>9am - 6pm</p>
        <h3>Sat</h3>
        <p>8am - 4pm</p>
        <h3>Sun</h3>
        <p>9am - 2pm</p>
      </div>
    </div>
  );
};
