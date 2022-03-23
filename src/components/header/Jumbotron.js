import "../../styles.css";
import React from "react";

import { EmailSignup } from "../utils/EmailSignup.js";
import { Navbar } from "./Navbar.js";

class Jumbotron extends React.Component {
  render() {
    return (
      <>
        <div className="Jumbotron">
          <Navbar />
          <div className="Jumbotron-main">
            <h1 id="JumboText">Unlimited movies, TV shows, and more.</h1>
            <h2 id="JumboSubtext">Watch anywhere. Cancel anytime.</h2>
            <EmailSignup />
          </div>
        </div>
      </>
    );
  }
}

export { Jumbotron };
