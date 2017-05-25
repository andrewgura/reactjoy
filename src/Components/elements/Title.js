import React, { Component } from "react";

export class Title extends Component {
  render() {
    const hStyle = {
      display: "inline-block",
      margin: "0",
      padding: "0 20px 12px",
      fontFamily: "Raleway",
      fontWeight: "200",
      fontSize: "36px",
      letterSpacing: "1px",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      marginBottom: "30px",
      color: "#fff"
    };
    return (
      <div>
        <h1 style={hStyle}>{this.props.title}</h1>
      </div>
    );
  }
}
