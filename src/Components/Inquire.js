import React, { Component } from "react";
import { Title } from "./elements/Title";

export class Inquire extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
      float: "right"
    };
    return (
      <div style={divStyle}>
        <Title title={this.props.title} />
      </div>
    );
  }
}
