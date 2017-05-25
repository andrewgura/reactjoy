import React, { Component } from "react";

export class Button extends Component {
  render() {
    const divStyle = {
      width: "600px",
      margin: "auto"
    };

    const buttonStyle = {
      width: "95%",
      margin: "30px auto 0 auto",
      background: "transparent",
      border: "1px solid #fff",
      borderRadius: "1px",
      color: "#fff",
      textTransform: "uppercase",
      transition: "all 0.3s ease 0s",
      textDecoration: "none",
      textAlign: "center",
      fontFamily: "'Raleway', sans-serif",
      fontWeight: "200",
      letterSpacing: "3px",
      padding: "10px 0",
      fontSize: "17px"
    };

    return (
      <div style={divStyle}>
        <a href={this.props.href}>
          <button style={buttonStyle}>{this.props.name}</button>
        </a>
      </div>
    );
  }
}
