import React, { Component } from "react";
import { Title } from "./elements/Title";
import { PageLink } from "./elements/PageLink";

export class GalleryBox extends Component {
  render() {
    const divStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://res.cloudinary.com/hubbard-inn/image/upload/q_70,w_1600/v1464909059/joy/backgrounds/s2dzzjkcnctc7axuhw8w.jpg')`,
      backgroundPosition: "50%, 50%",
      padding: "150px 0 130px",
      alignText: "center"
    };

    const container = {
      width: "1170px",
      marginRight: "auto",
      marginTop: "30px",
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

        <PageLink href="/#private-events" label="Book your event with joy" />

      </div>
    );
  }
}
