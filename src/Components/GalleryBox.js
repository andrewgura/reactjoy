import React, { Component } from "react";
import { Title } from "./elements/Title";

export class GalleryBox extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url(http://res.cloudinary.com/hubbard-inn/image/upload/q_70,w_1600/v1464909059/joy/backgrounds/s2dzzjkcnctc7axuhw8w.jpg)`,
      padding: "240px 0 130px",
      alignText: "center"
    };

    const container = {
      width: "1170px",
      marginRight: "auto",
      marginLeft: "auto",
      paddingLeft: "15px",
      paddingRight: "15px",
      display: "inline-block"
    };

    return (
      <div style={divStyle}>
        <Title title={this.props.title} />
        <div style={container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
