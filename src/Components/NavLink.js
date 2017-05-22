import React, { Component } from "react";

export class NavLink extends Component {
  render() {
    {
      const navLinks = this.props;
      return (
        <div>
          <li>
            {this.props.title}
          </li>
        </div>
      );
    }
  }
}
