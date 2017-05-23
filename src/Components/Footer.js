import React, { Component } from "react";

export class Footer extends Component {
  render() {
    const divStyle = {
      backgroundColor: "#000"
    };
    const pStyle = {
      margin: "30px 0",
      color: "#999",
      textAlign: "center",
      wordWrap: "break-word"
    };
    const aStyle = {
      color: "#337ab7",
      textDecoration: "none"
    };

    return (
      <div style={divStyle}>
        <p style={pStyle}>
          Joy District • 112 W. Hubbard St. • CHICAGO, IL 60654 • (312) 955-0339
          <br />
          <a href="https://gobootler.com" style={aStyle}>Order on Bootler</a>
        </p>
      </div>
    );
  }
}
