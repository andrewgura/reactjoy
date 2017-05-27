import React from "react";
import Link from "react-router/lib/Link";
import PropTypes from "prop-types";
import { css } from "glamor";

const styles = {
  linkstyle: css({
    width: "95%",
    display: "inline-block",
    margin: "30px auto 0 auto",
    background: "transparent",
    ":hover": {
      backgroundColor: "rgba(156,156,156,0.41)"
    },
    border: "1px solid #fff",
    borderRadius: "1px",
    color: "#fff",
    textTransform: "uppercase",
    transition: "all 0.3s ease 0s",
    textDecoration: "none",
    textAlign: "center",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "200",
    letterSpacing: "3px",
    padding: "10px 0",
    fontSize: "17px"
  })
};

export const PageLink = ({ href, label }) => (
  <Link to={href} className={styles.linkstyle}>{label}</Link>
);
