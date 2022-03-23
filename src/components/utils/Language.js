import "./utils.css";
import React from "react";

class Language extends React.Component {
  render() {
    return (
      <button className={this.props.className} id="LanguageBtn">
        <span role="img">🌐</span> English v
      </button>
    );
  }
}

export { Language };
