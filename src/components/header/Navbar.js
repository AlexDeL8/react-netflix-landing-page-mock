import "./header.css";
import React from "react";
import { Language } from "../utils/Language.js";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="Navbar">
          <span id="Logo">NETFLIX</span>
          <button className="NavButton" id="SignupBtn">
            Sign In
          </button>
          <Language className="NavButton" />
        </nav>
      </>
    );
  }
}

export { Navbar };
