import React, { Component } from "react";

export class NavLink extends Component {
  render() {
    {
      const divStyle = {};

      const aStyle = {
        alignContent: "center",
        textDecoration: "none"
      };

      const liStyle = {
        color: this.props.color ? this.props.color : "black",
        textTransform: "uppercase",
        fontSize: "18px",
        display: "inline",
        textAlign: "center",
        margin: "0",
        padding: "0"
      };

      const ulStyle = {
        display: "inline",
        alignContent: "center",
        padding: "0",
        marginTop: "10%"
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
