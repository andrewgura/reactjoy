import React, { Component } from "react";

export class Event extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
