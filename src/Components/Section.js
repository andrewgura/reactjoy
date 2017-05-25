import React, { Component } from "react";
import { Title } from "./elements/Title";

export class Section extends Component {
  render() {
    const divStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.props.background}')`,
      backgroundSize: "cover",
      padding: "50px"
    };

    return (
      <div style={divStyle}>
        <div id={this.props.href} />
        <Title title={this.props.title} />
        {this.props.children}
      </div>
    );
  }
}
