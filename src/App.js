import React from "react";
import { Helmet } from "react-helmet";

import { Ad, Header, ApptMap, ServicesHours, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Quality Haircuts in Indianapolis | Fresh Kutz Barbershop</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Best barbershop in Indianapolis. 
          Fresh Kutz offers quality haircut services paired with great vibes and great barbers. 
          Online appointments available for line ups, haircuts, and other haircut services. 
          Get an appointment scheduled and come get fresh!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="tQLf2DLkDPFHMVZ-tOw6SI6vRMcZod_QUBL9_WpzzvY"
        />
      </Helmet>
      <Ad />
      <Header />
      <ApptMap />
      <ServicesHours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
