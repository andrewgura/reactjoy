import React from "react";
import { css } from "glamor";
import { Title } from "./elements/Title";
import PropTypes from "prop-types";

const styles = {
  div: background =>
    css({
      background: background
        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${background}')`
        : "inital",
      backgroundSize: "cover",
      backgroundPosition: "50%, 50%",
      padding: "50px"
    })
};

export const Section = ({ href, title, background, children }) => (
  <div className={styles.div(background)}>
    <div id={href} />
    <Title title={title} />
    {children}
  </div>
);
