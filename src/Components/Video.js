import React, { Component } from "react";
import { PageLink } from "./elements/PageLink";

export class Video extends Component {
  render() {
    const videoStyle = {
      marginTop: "30px"
    };
    return (
      <div>
        <video src={this.props.src} controls style={videoStyle} />
        <PageLink href="/gallery" label="Book your event with joy" />

      </div>
    );
  }
}
