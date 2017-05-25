import React, { Component } from "react";

export class Location extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0"
    };

    const logobox = {
      padding: "0"
    };
    const imgStyle = {
      margin: "10px",
      marginBottom: "40px",
      padding: "0"
    };
    return (
      <div style={divStyle}>
        <div style={logobox}>
          <a href={this.props.link}>
            <img style={imgStyle} src={this.props.logo} alt="" />
          </a>
        </div>
      </div>
    );
  }
}
