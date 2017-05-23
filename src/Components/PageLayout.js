import React, { Component } from "react";

export class PageLayout extends Component {
  render() {
    const divStyle = {
      textAlign: "center",
      display: "grid"
    };

    return (
      <div style={divStyle}>
        {this.props.children}
      </div>
    );
  }
}
