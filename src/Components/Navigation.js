import React, { Component } from "react";

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
    return (
      <div style={navStyle}>

        {this.props.children}

      </div>
    );
  }
}
