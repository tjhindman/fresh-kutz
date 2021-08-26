import React from "react";
import defaultPic from "../../images/default-pic.jpeg";
import barbers from "../../barbers.json";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Map } from "./Map/Map";

import "./ApptMap.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "none",
    backgroundColor: "red",
    color: "white",
  },
  image: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    marginRight: "1.5rem",
  },
}));

export const ApptMap = () => {
  const classes = useStyles();

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="apptMapWrap">
      <div className="apptWrap">
        <h2>Book an Appointment Today!</h2>
        {barbers.map((barber) => (
          <Button
            className={classes.button}
            onClick={() => handleClick(barber.link)}
            variant="contained"
            size="large"
          >
            <img className={classes.image} src={defaultPic} alt="Donald"></img>
            {barber.name}
          </Button>
        ))}
      </div>
      <div className="mapWrap">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAWyzFI27X__JRZ_68V_i07rb--MQigIYA`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
};
