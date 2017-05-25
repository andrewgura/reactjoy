import React, { Component } from "react";
import { Button } from "./elements/Button";

export class Video extends Component {
  render() {
    const videoStyle = {
      marginTop: "30px"
    };
    return (
      <div>
        <video src={this.props.src} controls style={videoStyle} />
        <Button name="View Our Event Gallery" href="gallery" />
      </div>
    );
  }
}
