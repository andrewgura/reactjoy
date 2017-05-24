import React, { Component } from "react";

class NotFound extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url("https://showwp.com/wp-content/uploads/2016/02/404_page_template_03.jpg")`,
      backgroundPosition: "50% 50%",
      backgroundSize: "cover",
      height: "100vh",
      backgroundRepeat: "no-repeat"
    };
    return <div style={divStyle} />;
  }
}

export default NotFound;
