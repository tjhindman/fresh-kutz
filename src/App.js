import React from "react";

import { Header, ApptMap, ServicesHours, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ApptMap />
      <ServicesHours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
