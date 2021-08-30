import React from "react";

import { Ad, Header, ApptMap, ServicesHours, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Ad />
      <Header />
      <ApptMap />
      <ServicesHours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
