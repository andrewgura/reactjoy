import React, { Component } from "react";

export class Menu extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto"
    };

    const secStyle = {
      textAlign: "center",
      marginRight: "10px",
      marginLeft: "10px",
      marginTop: "40px"
    };
    const aStyle = {
      textDecoration: "none",
      color: "white"
    };
    return (
      <div style={divStyle}>

        <section style={secStyle}>
          <a style={aStyle} href={this.props.link}>
            <img src={this.props.img} alt="" />
            <h2>{this.props.name}</h2>
          </a>
        </section>

      </div>
    );
  }
}
