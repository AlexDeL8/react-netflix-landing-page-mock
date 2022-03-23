import "../styles.css";
import React from "react";

import { Jumbotron } from "./header/Jumbotron.js";
import { InfoPanels } from "./main/info/InfoPanels.js";
import { Faqs } from "./main/faqs/Faqs";
import { Footer } from "./footer/Footer.js";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="LandingPage">
        <Jumbotron />
        <InfoPanels />
        <Faqs />
        <Footer />
      </div>
    );
  }
}

export { LandingPage };
