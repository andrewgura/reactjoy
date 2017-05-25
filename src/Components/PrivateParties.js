import React, { Component } from "react";
import { Title } from "./elements/Title";
import { Button } from "./elements/Button";

export class PrivateParties extends Component {
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <Button
          name="Learn about our space"
          href="http://res.cloudinary.com/hubbard-inn/image/upload/v1488924452/joy/private-events-attachments/joy-district.pdf"
        />
        <Button name="View our space" href="gallery" />
      </div>
    );
  }
}
