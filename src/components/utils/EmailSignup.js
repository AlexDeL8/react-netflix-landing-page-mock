import "./utils.css";
import React from "react";

class EmailSignup extends React.Component {
  render() {
    return (
      <>
        <div>
          <p id="EmailLabel">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <input placeholder="Email address"></input>
          <button>Get Started &#62;</button>
        </div>
      </>
    );
  }
}

export { EmailSignup };
