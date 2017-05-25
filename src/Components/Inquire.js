import React, { Component } from "react";
import { Title } from "./elements/Title";

export class Inquire extends Component {
  render() {
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }
}
