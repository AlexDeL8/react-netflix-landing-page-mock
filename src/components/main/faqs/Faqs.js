import "./faqs.css";
import React from "react";

import { Question } from "./Question.js";
import { EmailSignup } from "../../utils/EmailSignup";

class Faqs extends React.Component {
  render() {
    return (
      <>
        <div className="Faqs">
          <h2 id="FaqTitle">Frequently Asked Questions</h2>
          <ul id="QuestionList">
            <Question question="What is Netflix?" />
            <Question question="How much does Netflix cost?" />
            <Question question="Where can I watch?" />
            <Question question="How do I cancel?" />
            <Question question="What can I watch on Netflix?" />
            <Question question="Is Netflix good for kids?" />
            <EmailSignup />
          </ul>
        </div>
      </>
    );
  }
}

export { Faqs };
