import React, { Component } from "react";
import { Title } from "./elements/Title";

export class AboutUs extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      width: "47%",
      float: "left"
    };
    const pStyle = {
      color: "#fff",
      marginTop: "0",
      textAlign: "left"
    };
    return (
      <div style={divStyle}>
        <Title title={this.props.title} />
        <p style={pStyle}>
          Leading the culinary team is Executive Chef Matt Wilde. Wilde has curated a playful menu of classic dishes with innovative twists. Meant to be shared among friends, features include a Grilled Spanish Octopus Taco, as well as a special Lollipop Menu including Rosemary-marinated Fried Amish Chicken, Crispy Phyllo-wrapped Tiger Shrimp and Smoked Pork Spare Rib. Starting with the ground floor dining room and elevated library and lounge, guests will experience a modern American menu in the vibrant s...
        </p>
      </div>
    );
  }
}
