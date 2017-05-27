import React, { Component } from "react";
import { css } from "glamor";

const styles = {
  ul: css({
    width: "100%",
    padding: "0"
  }),
  li: css({
    background: "transparent",
    display: "inline",
    marginBottom: "5px",
    textTransform: "uppercase",
    borderRight: "1px solid #fff",
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
  <div>
    <ul className={styles.ul}>
      <li className={styles.li}>
        <a href={href} className={styles.a(color)}>
          {name}
        </a>
      </li>
    </ul>
  </div>
);
