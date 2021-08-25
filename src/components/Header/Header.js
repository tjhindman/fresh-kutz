import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className="headerWrap">
      <h1>Fresh Kutz</h1>
      <p>"Good business. Good people. Good kutz."</p>
      <hr className="lineBreak" />
      <h3>(317) 259-4390</h3>
      <h3 style={{ marginTop: "0", textAlign: "center" }}>
        5957 N Michigan Rd.
        <br />
        Indianapolis, IN 46228
      </h3>
    </div>
  );
};
