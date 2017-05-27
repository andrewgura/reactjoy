import React, { Component } from "react";
import { Title } from "./elements/Title";
import { ExternalLink } from "./elements/ExternalLink";
import { PageLink } from "./elements/PageLink";

export class PrivateParties extends Component {
  render() {
    const divStyle = {
      display: "inline-block",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      width: "47%",
      float: "left"
    };
    return (
      <div style={divStyle}>
        <Title title={this.props.title} />

        <ExternalLink
          label="Learn about our space"
          target="_self"
          href="http://res.cloudinary.com/hubbard-inn/image/upload/v1488924452/joy/private-events-attachments/joy-district.pdf"
        />

        <PageLink href="gallery" label="View our space" />

      </div>
    );
  }
}
