import React, { Component } from "react";

export class NavLink extends Component {
  render() {
    {
      const divStyle = {
        zIndex: "1000",
        top: "0",
        left: "0",
        right: "0",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1em",
        marginTop: "60px",
        position: "absolute",
        background: "transparent"
      };

      const aStyle = {
        display: "inline",
        textDecoration: "none",
        fontSize: "18px",
        lineHeight: "1.2",
        padding: "14px 0"
      };

      const liStyle = {
        color: this.props.color ? this.props.color : "black",
        background: "transparent",
        display: "inline",
        padding: "0 10px",
        marginBottom: "5px"
      };

      const ulStyle = {
        width: "100%",
        margin: "50px 10px 0",
        padding: "0"
      };

      return (
        <div style={divStyle}>
          <a href={this.props.href ? this.props.href : "#"} style={aStyle}>
            <ul style={ulStyle}>
              <li style={liStyle}> {this.props.name}</li>
            </ul>
          </a> |
        </div>
      );
    }
  }
}
