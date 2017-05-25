import React, { Component } from "react";

export class SideBySide extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url(${this.props.background})`,
      backgroundSize: "cover",
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