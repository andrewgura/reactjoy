import React, { Component } from "react";

export class Location extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
