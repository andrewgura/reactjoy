import React, { Component } from "react";
import { NavLink } from "./NavLink";

export class Navigation extends Component {
  render() {
    const navStyle = {
      top: "0",
      left: "0",
      right: "0",
      justifyContent: "center",
      zIndex: "1000",
      textAlign: "center",
      display: "flex",
      fontSize: "1em",
      marginTop: "60px",
      position: "absolute",
      background: "transparent"
    };

    const ulStyle = {
      width: "100%",
      padding: "0"
    };

    return (
      <div style={navStyle}>
        <ul style={ulStyle}>
          <NavLink
            name="Find a table"
            color="#fff"
            href="https://www.opentable.com/r/joy-district-reservations-chicago?restref=261853"
          />
          <NavLink name="Menu" color="#fff" href="/#menu" />
          <NavLink name="Private Events" color="#fff" href="/#private-events" />
          <NavLink name="Gallery" color="#fff" href="gallery" />
          <NavLink name="Bottle Service" color="red" href="rooftop" />
        </ul>

      </div>
    );
  }
}
