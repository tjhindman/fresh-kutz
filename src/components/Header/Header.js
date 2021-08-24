import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className="headerWrap">
      <h1>Fresh Kutz</h1>
      <p>"Indy's #1 Barbershop!"</p>
      <h3>(317) 317-3173</h3>
      <h3 style={{ textAlign: "center" }}>
        1234 Something Rd.
        <br />
        Indianapolis, IN 46228
      </h3>
    </div>
  );
};
