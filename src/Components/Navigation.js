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

    const Logo = {
      width: "400px",
      display: "block",
      maxWidth: "100%",
      margin: "auto"
    };

    const LogoBox = {
      position: "absolute",
      width: "400px",
      height: "200px",
      top: "20%",
      bottom: "30%",
      left: "0",
      right: "0",
      margin: "auto"
    };

    const pStyle = {
      fontFamily: "'Open Sans', sans-serif",
      color: "#fff",
      fontSize: "16px",
      left: "50%",
      bottom: "100px",
      position: " absolute",
      transform: "translateX(-50%)",
      textAlign: "center"
    };

    const arrowImg = {
      height: "30px",
      width: "30px",
      position: "absolute",
      bottom: "60px",
      left: "50%"
    };

    return (
      <div style={divStyle}>
        {this.props.children}
        <div style={LogoBox}>
          <img
            style={Logo}
            src="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_400/v1461961281/joy/logos/joy-district.png"
          />
        </div>
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
