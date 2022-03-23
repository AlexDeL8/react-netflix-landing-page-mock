import "./info.css";
import React from "react";

class Panel extends React.Component {
  render() {
    return (
      <>
        <div className="Panel">
          <span className="InfoText">
            <h2>{this.props.mainText}</h2>
            <h3>{this.props.subText}</h3>
          </span>
          <img src={this.props.imageUrl} />
        </div>
      </>
    );
  }
}

export { Panel };
