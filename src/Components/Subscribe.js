import React from "react";
import { css } from "glamor";

const styles = {
  p: css({
    color: "#fff",
    margin: "0 0 10px",
    fontFamily: "'Open Sans', sans-serif",
    marginBottom: "20px",
    fontSize: "16px"
  }),
  inputContainer: css({
    display: "inline-flex"
  }),
  input: css({
    backgroundColor: "#555",
    transition: "all 0.3s ease 0s",
    ":focus": {
      backgroundColor: "black"
    },
    height: "30px",
    width: "400px",
    padding: "6px 12px",
    fontSize: "14px",
    border: "none",
    color: "white",
    outline: "none"
  }),
  submit: css({
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    fontFamily: "Raleway",
    fontSize: "17px",
    padding: "10px 0",
    width: "150px"
  })
};

export const Subscribe = () => (
  <div>
    <p className={styles.p}>
      Sign up to our mailing list to hear more about 8 Hospitality events!
    </p>
    <div className={styles.inputContainer}>
      <form
        action="//hubbardinn.us8.list-manage.com/subscribe/post?u&#x3D;c92a0ed74771bd546c02471bb&amp;id&#x3D;01465ee022"
        method="POST"
        target="_blank"
        novalidate
      >
        <input
          type="email"
          className={styles.input}
          placeholder="Email address"
        />
        <input
          id="mc-embedded-subscribe"
          type="submit"
          className={styles.submit}
          value="SUBSCRIBE"
        />
      </form>
    </div>
  </div>
);
