import React, { Component } from "react";

export class GalleryItem extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto"
    };

    const imgStyle = {
      paddingLeft: "5px",
      paddingRight: "5px",
      width: "350px",
      textAlign: "center",
      border: "2px solid #000"
    };

    return (
      <div style={divStyle}>
        <img style={imgStyle} src={this.props.img} alt="" />
      </div>
    );
  }
}
