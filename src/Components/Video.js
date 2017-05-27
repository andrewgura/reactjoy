import React, { Component } from "react";
import { PageLink } from "./elements/PageLink";

export class Video extends Component {
  render() {
    const videoStyle = {
      marginTop: "30px"
    };
    const divStyle = {
      width: "600px",
      display: "inline-block"
    };
    return (
      <div style={divStyle}>
        <video src={this.props.src} controls style={videoStyle} />
        <div style={divStyle}>
          <PageLink href="/gallery" label="Book your event with joy" />
        </div>

      </div>
    );
  }
}
