import React from "react";
import { css } from "glamor";

const styles = {
  li: css({
    background: "transparent",
    display: "inline",
    marginBottom: "5px",
    ":not(:last-child)": {
      borderRight: "1px solid #fff"
    },
    textTransform: "uppercase",
    padding: "0 10px"
  }),
  a: (color = "black") =>
    css({
      color: color,
      display: "inline",
      textDecoration: "none",
      fontSize: "18px",
      lineHeight: "1.2"
    })
};

export const NavLink = ({ href, name, color }) => (
  <li className={styles.li}>
    <a href={href} className={styles.a(color)}>
      {name}
    </a>
  </li>
);
