import React, { Component } from "react";
import { Title } from "./elements/Title";

export class BSContainer extends Component {
  render() {
    const divStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_1600/v1462327341/joy/backgrounds/nrufiomldjyjepishvx0.jpg')`,
      padding: "240px 0 130px",
      position: "relative",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover"
    };

    return (
      <div style={divStyle}>
        <Title title={this.props.title} />
        {this.props.children}
      </div>
    );
  }
}
