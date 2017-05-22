import React, { Component } from "react";

export class PageLayout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
