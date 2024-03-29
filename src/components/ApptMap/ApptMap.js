import React from "react";
import defaultPic from "../../images/default-pic.jpeg";
import barbers from "../../barbers.json";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Map } from "./Map/Map";

import "./ApptMap.css";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1),
    textTransform: "none",
    backgroundColor: "red",
    color: "white",
  },
  newFlag: {
    width: "max-content",
    margin: ".4em",
    padding: ".2em .6em",
    fontSize: ".8em",
    fontWeight: "bold",
    borderRadius: "50%",
    backgroundColor: "yellow",
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
        {/* 
          sorts barber array alphabetically based on "name" property in each object
        
          *** ".sort()" accepts a compare function that should return a negative value if first argument is less than second, and a positive value if it's the opposite
        */}
        {barbers.sort((x,y) => x.name < y.name ? -1 : 1).map((barber) => (
          // * functionality for adding a "New!" flag for new barbers
          // barber.new ? (
          //   <div>
          //     <p
          //       className={classes.newFlag}
          //     >
          //       New!
          //     </p>
          //     <Button
          //       className={classes.button}
          //       onClick={() => handleClick(barber.link)}
          //       variant="contained"
          //       size="large"
          //     >
          //       <img
          //         className={classes.image}
          //         src={defaultPic}
          //         alt={barber.name}
          //       />
          //       <div style={{ width: "3.2em", textAlign: "center" }}>
          //         {barber.name}
          //       </div>
          //     </Button>
          //   </div>
          // ) :
          <Button
            className={classes.button}
            onClick={() => handleClick(barber.link)}
            variant="contained"
            size="large"
          >
            <img className={classes.image} src={defaultPic} alt={barber.name} />
            <div style={{ width: "3.2em", textAlign: "center" }}>
              {barber.name}
            </div>
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
