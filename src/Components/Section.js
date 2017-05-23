import React, { Component } from "react";
import { Title } from "./elements/Title";

export class Section extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url(${this.props.background})`,
      backgroundSize: "cover",
      backgroundColor: "black",
      padding: "80px"
    };

    return (
      <div style={divStyle}>
        <Title title={this.props.title} />
        {this.props.children}
      </div>
    );
  }
}
