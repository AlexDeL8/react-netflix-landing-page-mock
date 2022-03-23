import "./faqs.css";
import React from "react";

class Question extends React.Component {
  render() {
    return (
      <li className="Question">
        <span>{this.props.question}</span>
        <span className="ExpandPlus">+</span>
      </li>
    );
  }
}

export { Question };
