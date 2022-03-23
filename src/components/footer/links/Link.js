import "../footer.css";
import React from "react";

class Link extends React.Component {
  render() {
    return (
      <li>
        <a href="#">{this.props.linkText}</a>
      </li>
    );
  }
}

export { Link };
