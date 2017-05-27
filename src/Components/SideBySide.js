import React, { Component } from "react";

export class SideBySide extends Component {
  render() {
    const divStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.props.background}')`,
      backgroundSize: "cover",
      backgroundPosition: "50%, 50%",
      padding: "50px"
    };

    const contentContainer = {
      width: "1170px",
      marginRight: "auto",
      marginLeft: "auto",
      paddingLeft: "15px",
      paddingRight: "15px"
    };

    return (
      <div style={divStyle}>
        <div id={this.props.href} />
        <div style={contentContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
