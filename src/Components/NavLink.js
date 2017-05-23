import React, { Component } from "react";

export class NavLink extends Component {
  render() {
    {
      const aStyle = {
        color: this.props.color ? this.props.color : "black",
        textDecoration: "none"
      };

      const liStyle = {
        width: "100%",
        margin: "50px 10px 0",
        textTransform: "uppercase",
        display: "inline",
        fontSize: "18px",
        lineHeight: "1.2",
        padding: "14px 0"
      };

      const ulStyle = {
        display: "block"
      };

      return (
        <div>
          <a href={this.props.href ? this.props.href : "#"} style={aStyle}>
            <ul style={ulStyle}>
              <li style={liStyle}> {this.props.name}</li>
            </ul>
          </a>
        </div>
      );
    }
  }
}
