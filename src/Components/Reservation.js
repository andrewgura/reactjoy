import React, { Component } from "react";

export class Reservation extends Component {
  render() {
    const pStyle = {
      color: "red"
    };

    return (
      <div>
        <p style={pStyle}>
          Please indicate venue space in the "Additional Information" field. On2 or Rooftop
        </p>
        <iframe
          src="https://www.sevenrooms.com/direct/reservation-request/joydistrict/table"
          height="470"
          width="650"
          frameborder="0"
        />
      </div>
    );
  }
}
