import React, { Component } from "react";
import { Title } from "./elements/Title";

export class Hours extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
      float: "right"
    };
    const ulStyle = {
      color: "#fff",
      maxWidth: "300px",
      margin: "auto",
      paddingLeft: "0",
      listStyle: "none"
    };

    const liStyle = {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
      lineHeight: "1.7"
    };

    return (
      <div style={divStyle}>
        <Title title={this.props.title} />
        <ul style={ulStyle}>
          <li style={liStyle}>
            <span class="Section-lead Hour-day">Monday - Friday</span>
            <span class="Section-lead Hour-time"> 3:00 pm - 2:00 am</span>
          </li>
          <li style={liStyle}>
            <span class="Section-lead Hour-day">Saturday</span>
            <span class="Section-lead Hour-time"> 3:00 pm - 3:00 am</span>
          </li>
          <li style={liStyle}>
            <span class="Section-lead Hour-day">Sunday</span>
            <span class="Section-lead Hour-time"> 3:00pm - 2:00am</span>
          </li>
        </ul>
      </div>
    );
  }
}
