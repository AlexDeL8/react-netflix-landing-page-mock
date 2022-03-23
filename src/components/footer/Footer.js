import "./footer.css";
import React from "react";

import { Link } from "./links/Link.js";
import { Language } from "../utils/Language.js";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="Footer">
          <p>
            Questions? Call{" "}
            <a id="PhoneNumber" href="#">
              1-844-505-2993
            </a>
          </p>
          <ul className="FooterLinkList">
            <Link linkText="FAQ" />
            <Link linkText="Investor Relations" />
            <Link linkText="Ways to Watch" />
            <Link linkText="Corporate Information" />
            <Link linkText="Only on Netflix" />
          </ul>
          <ul className="FooterLinkList">
            <Link linkText="Help Center" />
            <Link linkText="Jobs" />
            <Link linkText="Terms of Use" />
            <Link linkText="Contact Us" />
          </ul>
          <ul className="FooterLinkList">
            <Link linkText="Account" />
            <Link linkText="Redeem Gift Cards" />
            <Link linkText="Privacy" />
            <Link linkText="Speed Test" />
          </ul>
          <ul className="FooterLinkList">
            <Link linkText="Media Center" />
            <Link linkText="Buy Gift Cards" />
            <Link linkText="Cookie Preferences" />
            <Link linkText="Legal Notices" />
          </ul>
          <Language className="FooterButton" />
        </div>
      </>
    );
  }
}

export { Footer };
