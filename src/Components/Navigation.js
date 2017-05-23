import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url("http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_auto,q_70,w_auto/v1462327219/joy/backgrounds/gube8cjjgfhqthuojkfr.jpg")`,
      position: "relative",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover",
      height: "100vh",
      backgroundRepeat: "no-repeat"
    };

    const imgStyle = {
      marginTop: "13%",
      size: "100%"
      // position: "abosolute"
    };

    const pStyle = {
      fontFamily: "'Open Sans', sans-serif",
      color: "#fff",
      fontSize: "16px",
      marginTop: "12%",
      position: " relative"
    };

    const arrowImg = {
      height: "30px",
      width: "30px",
      position: " relative"
    };

    return (
      <div style={divStyle}>
        {this.props.children}
        <img
          style={imgStyle}
          src="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_400/v1461961281/joy/logos/joy-district.png"
        />
        <p style={pStyle}>
          112 W. Hubbard St. • CHICAGO, IL 60654 • (312) 955-0339
        </p>
        <a href="#AboutUs">
          <img
            style={arrowImg}
            src="https://maxcdn.icons8.com/Share/icon/Arrows//down41600.png"
          />
        </a>
      </div>
    );
  }
}
