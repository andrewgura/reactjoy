import React, { Component } from "react";

export class Subscribe extends Component {
  render() {
    const pStyle = {
      color: "#fff",
      margin: "0 0 10px",
      fontFamily: "'Open Sans', sans-serif",
      marginBottom: "20px",
      fontSize: "16px"
    };

    const inputContainer = {
      display: "inline-flex"
    };

    const emailStyle = {
      backgroundColor: "#555",
      height: "30px",
      width: "400px",
      padding: "6px 12px",
      fontSize: "14px",
      border: "none",
      color: "white",
      outline: "none"
    };

    const subInput = {
      background: "transparent",
      border: "1px solid #fff",
      color: "#fff",
      fontFamily: "Raleway",
      fontSize: "17px",
      padding: "10px 0",
      width: "150px"
    };

    return (
      <div>
        <p style={pStyle}>
          Sign up to our mailing list to hear more about 8 Hospitality events!
        </p>
        <div style={inputContainer}>
          <input
            type="email"
            style={emailStyle}
            placeholder="Email address"
            required
          />
          <input type="submit" style={subInput} value="SUBSCRIBE" />
        </div>
      </div>
    );
  }
}
