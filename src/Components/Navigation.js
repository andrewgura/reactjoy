import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url("http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_auto,q_70,w_auto/v1462327219/joy/backgrounds/gube8cjjgfhqthuojkfr.jpg")`,
      position: "relative",
      backgroundPosition: "50% 50%",
      backgroundSize: "100%",
      height: "100vh"
    };

    const imgStyle = {
      display: "block",
      margin: "0 auto"
    };

    return (
      <div style={divStyle}>
        <div>
          {this.props.children}
        </div>
        <img
          style={imgStyle}
          src="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_400/v1461961281/joy/logos/joy-district.png"
        />
      </div>
    );
  }
}
