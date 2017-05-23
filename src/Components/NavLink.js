import React, { Component } from "react";

export class NavLink extends Component {
  render() {
    {
      const ulStyle = {
        width: "100%",
        margin: "50px 10px 0",
        padding: "0",
        height: "100vh"
      };

      const liStyle = {
        padding: "0 10px",
        background: "transparent",
        display: "inline",
        marginBottom: "5px",
        textTransform: "uppercase"
      };

      const aStyle = {
        color: this.props.color ? this.props.color : "black",
        display: "inline",
        textDecoration: "none",
        fontSize: "18px",
        lineHeight: "1.2",
        padding: "14px 0"
      };

      return (
        <div>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href={this.props.href ? this.props.href : "#"} style={aStyle}>
                {this.props.name}
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
}
