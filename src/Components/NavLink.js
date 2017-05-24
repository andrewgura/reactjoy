import React, { Component } from "react";

export class NavLink extends Component {
  render() {
    {
      const ulStyle = {
        width: "100%",
        padding: "0"
      };

      const liStyle = {
        background: "transparent",
        display: "inline",
        marginBottom: "5px",
        textTransform: "uppercase",
        borderRight: "1px solid #fff",
        padding: "0 10px"
      };

      const aStyle = {
        color: this.props.color ? this.props.color : "black",
        display: "inline",
        textDecoration: "none",
        fontSize: "18px",
        lineHeight: "1.2"
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
