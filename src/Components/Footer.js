import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
