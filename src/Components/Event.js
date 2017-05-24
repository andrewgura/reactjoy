import React, { Component } from "react";

export class Event extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto"
    };

    const h2Style = {
      color: "white"
    };

    const imgStyle = {
      textAlign: "center",
      marginRight: "10px",
      marginLeft: "10px"
    };
    return (
      <div style={divStyle}>
        <h2 style={h2Style}>{this.props.name}</h2>
        <img style={imgStyle} src={this.props.src} />
      </div>
    );
  }
}
